using Microsoft.Framework.DependencyInjection;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Business.Operations.Users;
using Tourtlee.BookingSystem.Business.Services;

namespace Tourtlee.BookingSystem.Business
{
    public static class IocRegistrations
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // Create services
            services.AddScoped<IOrganizationService, OrganizationService>();
            services.AddScoped<IUserService, UserService>();

            // Create operations
            services.AddTransient<CreateOrganizationOperation>();
            services.AddTransient<GetOrganizationListOperation>();
            services.AddTransient<DeleteOrganizationOperation>();
            services.AddTransient<UpdateOrganizationOperation>();

            services.AddTransient<GetUserListOperation>();
            services.AddTransient<CreateUserOperation>();
        }
    }
}
