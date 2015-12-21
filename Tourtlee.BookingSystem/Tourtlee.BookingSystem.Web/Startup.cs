using System;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using Microsoft.Dnx.Runtime;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.DataAccess;
using Tourtlee.BookingSystem.DataAccess.Auth;
using Tourtlee.BookingSystem.Model.Security;
using Tourtlee.BookingSystem.Web.Configurations;
using Tourtlee.BookingSystem.Web.Security;
using Microsoft.AspNet.Mvc.Razor;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNet.Mvc.Formatters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.PlatformAbstractions;

namespace Tourtlee.BookingSystem.Web
{
    public class Startup
    {
        public static IConfiguration Configuration
        {
            get;
            private set;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddEntityFramework()
                            .AddSqlServer()
                             .AddDbContext<BookingDbContext>(options =>
                                options.UseSqlServer(Configuration.GetSection("Database:Connection").Value));

            services.Configure<AuthOptions>(options =>
            {
                options.DefaultUsername = Configuration.GetSection("DefaultUser:Username").Value;
                options.DefaultPassword = Configuration.GetSection("DefaultUSer:Password").Value;
            });

            services.AddIdentity<ApplicationUser, IdentityRole>()
                           .AddEntityFrameworkStores<BookingDbContext>()
                           .AddDefaultTokenProviders();

            services.AddMvc();
            services.Configure<MvcOptions>(options =>
            {
                //options.Filters.Add(new AuthorizeAttribute());
                var jsonOutputFormatter = new JsonOutputFormatter
                {
                    SerializerSettings = {ContractResolver = new CamelCasePropertyNamesContractResolver()}
                };
                options.OutputFormatters.Insert(0, jsonOutputFormatter);
            });

            // Configure Auth
            services.Configure<AuthorizationOptions>(options =>
            {
                options.AddPolicy(AppPolicies.AccessAdminArea.ToString(), 
                    new AuthorizationPolicyBuilder().RequireClaim(AppPolicies.AccessAdminArea.ToString(), "Allowed").Build());
            });

            // TODO refactor IoC registration
            DataAccess.IocRegistrations.RegisterServices(services);
            Business.IocRegistrations.RegisterServices(services);

            // TODO refactor Automapper configuration
            Business.AutoMapperConfiguration.Configure();

        }

        public Startup(IApplicationEnvironment appEnv)
        {
            var builder = new ConfigurationBuilder();

            builder
                .AddJsonFile("config.json")
                .AddEnvironmentVariables();


            Configuration = builder.Build();
        }

        public void Configure(IApplicationBuilder app, IServiceProvider serviceProvider)
        {
            app.UseIISPlatformHandler();
            app.UseStaticFiles();
            app.UseIdentity();
            app.UseMvc(MvcRoutes.Configure);

            BookingDbContext.InitializeDatabaseAsync(app.ApplicationServices).Wait();
        }
    }
}
