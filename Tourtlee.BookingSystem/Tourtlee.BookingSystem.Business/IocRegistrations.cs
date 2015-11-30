using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Business.Operations.Tours;
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
            services.AddScoped<ITourService, TourService>();

            // Create operations
            services.AddTransient<CreateOrganizationOperation>();
            services.AddTransient<GetOrganizationListOperation>();
            services.AddTransient<DeleteOrganizationOperation>();
            services.AddTransient<UpdateOrganizationOperation>();

            //Tour operations
            services.AddTransient<UpdateTourOperation>();
            services.AddTransient<DeleteTourOperation>();
            services.AddTransient<GetTourListOperation>();
            services.AddTransient<CreateTourOperation>();

            services.AddTransient<GetUserListOperation>();
            services.AddTransient<CreateUserOperation>();
        }
    }
}
