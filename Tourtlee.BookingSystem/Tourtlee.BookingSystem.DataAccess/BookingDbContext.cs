using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Extensions.OptionsModel;
using Tourtlee.BookingSystem.DataAccess.Auth;
using Tourtlee.BookingSystem.Model;
using Tourtlee.BookingSystem.Model.Security;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.DataAccess.Helpers;
using Tourtlee.BookingSystem.Model.Book;
using Tourtlee.BookingSystem.Model.Schedule;

namespace Tourtlee.BookingSystem.DataAccess
{
    public class BookingDbContext : IdentityDbContext<ApplicationUser>
    {
        private const string SecuritySchameName = "Security";
        const string AdminRole = "Admin";

        public DbSet<Organization> Organizations { get; set; }
        public DbSet<Tour> Tours { get; set; }
        public DbSet<ScheduleJson> Schedules { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ApplicationUser>()
                .HasOne(u => u.Organization)
                .WithMany(o => o.Users)
                .HasForeignKey(u => u.IdOrganization);

            builder.Entity<Tour>()
                .HasOne(t => t.Organization)
                .WithMany(t => t.Tours)
                .HasForeignKey(t => t.IdOrganization);

            builder.Entity<ScheduleJson>()
                .HasOne(t => t.Tour)
                .WithMany(t => t.Schedules)
                .HasForeignKey(t => t.IdTour);

            builder.Entity<Booking>();
        }

        public static async Task InitializeDatabaseAsync(IServiceProvider serviceProvider)
        {
            using (var db = serviceProvider.GetService<BookingDbContext>())
            {
                var sqlDb = db.Database;
                if (sqlDb != null)
                {
                    await sqlDb.EnsureCreatedAsync();
                    await CreateAdminUser(db, serviceProvider);
                }
            }
        }

        private static async Task CreateAdminUser(BookingDbContext db, IServiceProvider serviceProvider)
        {
            var options = serviceProvider.GetRequiredService<IOptions<AuthOptions>>().Value;
            var userMgr = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            var roleMgr = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            if (!await roleMgr.RoleExistsAsync(AdminRole))
            {
                await roleMgr.CreateAsync(new IdentityRole(AdminRole));
            }

            var user = await userMgr.FindByNameAsync(options.DefaultUsername);
            if (user == null)
            {

                var ownerOrganization = new Organization
                {
                    Name = "Owner",
                    IdOrganization = Organization.AdminIdOrganization
                };

                db.Organizations.Add(ownerOrganization);

                user = new ApplicationUser
                {
                    UserName = options.DefaultUsername,
                    IdOrganization = ownerOrganization.IdOrganization,
                    LockoutEnabled = false
                };

                var userCreationResult = await userMgr.CreateAsync(user, options.DefaultPassword);
                if (userCreationResult.Succeeded)
                {
                    await userMgr.AddClaimAsync(user, new Claim("AccessAdminArea", "Allowed"));
                    
                }

                CreateTours(ownerOrganization.IdOrganization, db);
            }

            await db.SaveChangesAsync();
        }

        private static void CreateTours(Guid idOrganization, BookingDbContext db)
        {
            var tour = new Tour()
            {
                Availabilities = 100,
                Description = "Test long tour",
                DescriptionShort = "Test short",
                IdTour = Guid.NewGuid(),
                Name = "Test tour",
                IdOrganization = idOrganization
            };

            db.Tours.Add(tour);

            var schedule = new ScheduleJson()
            {
                IdTour = tour.IdTour,
                IdScheduleJson = Guid.NewGuid(),
                ScheduleJsonType = ScheduleJsonTypes.ByWeekday
            };

            var scheduleByWeekdayJson = new ScheduleByWeekdayJson()
            {
                PeriodStart = DateTime.MinValue,
                PeriodEnd = DateTime.MaxValue,
                ListOfDayOfWeeksAndTimes = new List<DayOfWeekWithTime>
                {
                    new DayOfWeekWithTime { DayOfWeek = DayOfWeek.Thursday, Time = new TimeSpan(12,30,0)}
                }
            };
            schedule.Json = scheduleByWeekdayJson.Serialize();

            db.Schedules.Add(schedule);

            tour = new Tour()
            {
                Availabilities = 100,
                Description = "Test long tour 2",
                DescriptionShort = "Test short 2",
                IdTour = Guid.NewGuid(),
                Name = "Test tour 2",
                IdOrganization = idOrganization
            };

            db.Tours.Add(tour);
        }
    }
}
