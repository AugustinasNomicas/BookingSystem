using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.OptionsModel;
using Tourtlee.BookingSystem.DataAccess.Auth;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.DataAccess
{
    public class BookingDbContext :  IdentityDbContext<IdentityUser>
    {
        private const string SecuritySchameName = "Security";
        const string adminRole = "admin";

        public DbSet<Organization> Organizations { get; set; }

        public static async Task InitializeDatabaseAsync(IServiceProvider serviceProvider)
        {
            using (var db = serviceProvider.GetService<BookingDbContext>())
            {
                var sqlDb = db.Database;
                if (sqlDb != null)
                {
                    await sqlDb.EnsureCreatedAsync();
                    await CreateAdminUser(serviceProvider);
                }
            }
        }

        private static async Task CreateAdminUser(IServiceProvider serviceProvider)
        {
            var options = serviceProvider.GetRequiredService<IOptions<AuthOptions>>().Options;
            var userMgr = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
            var roleMgr = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            if (!await roleMgr.RoleExistsAsync(adminRole))
            {
                await roleMgr.CreateAsync(new IdentityRole(adminRole));
            }

            var user = await userMgr.FindByNameAsync(options.DefaultUsername);
            if (user == null)
            {
                user = new IdentityUser { UserName = options.DefaultUsername };
                var userCreationResult = await userMgr.CreateAsync(user, options.DefaultPassword);
                if (userCreationResult.Succeeded)
                {
                    await userMgr.AddToRoleAsync(user, adminRole);
                }
            }
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<IdentityUser>().ToTable("Users", SecuritySchameName);
            builder.Entity<IdentityRole>().ToTable("Roles", SecuritySchameName);
            builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaims", SecuritySchameName);
            builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims", SecuritySchameName);
            builder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins", SecuritySchameName);
            builder.Entity<IdentityUserRole<string>>().ToTable("UserRoles", SecuritySchameName);
        }
    }
}
