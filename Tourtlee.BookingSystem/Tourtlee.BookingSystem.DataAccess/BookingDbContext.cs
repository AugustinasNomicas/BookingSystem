using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.OptionsModel;
using Tourtlee.BookingSystem.DataAccess.Auth;
using Tourtlee.BookingSystem.Model;
using Tourtlee.BookingSystem.Model.Security;

namespace Tourtlee.BookingSystem.DataAccess
{
    public class BookingDbContext : IdentityDbContext<ApplicationUser>
    {
        private const string SecuritySchameName = "Security";
        const string AdminRole = "Admin";


        public DbSet<Organization> Organizations { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ApplicationUser>()
                .HasOne(u => u.Organization)
                .WithMany(o => o.Users)
                .ForeignKey(u => u.IdOrganization);
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

                var loggerFactory = db.GetService<ILoggerFactory>();
                loggerFactory.AddProvider(new DbLoggerProvider());
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
                    await db.SaveChangesAsync();
                }
            }
        }
    }
}
