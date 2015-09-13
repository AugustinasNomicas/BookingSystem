using Microsoft.Framework.DependencyInjection;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Business.Services;

namespace Tourtlee.BookingSystem.Business
{
    public static class IocRegistrations
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // Create services
            services.AddScoped<IOrganizationService, OrganizationService>();

            // Create operations
            services.AddTransient<CreateOrganizationOperation>();
            services.AddTransient<GetOrganizationListOperation>();

        }
    }
}
