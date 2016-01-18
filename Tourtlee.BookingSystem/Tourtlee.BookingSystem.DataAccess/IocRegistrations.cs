using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.DataAccess.Repositories;

namespace Tourtlee.BookingSystem.DataAccess
{
    public static class IocRegistrations
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IOrganizationRepository, OrganizationRepository>();
            services.AddScoped<ITourRepository, TourRepository>();
            services.AddScoped<IScheduleRepository, ScheduleRepository>();
            services.AddScoped<IBookingRepository, BookingRepository>();
            services.AddScoped<IUserSettingsRepository, UserSettingsRepository>();
        }
    }
}
