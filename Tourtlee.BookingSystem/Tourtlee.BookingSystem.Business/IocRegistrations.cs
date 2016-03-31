using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Operations.Book;
using Tourtlee.BookingSystem.Business.Operations.Bookings;
using Tourtlee.BookingSystem.Business.Operations.Checkin;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Operations.Export;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Business.Operations.Schedule;
using Tourtlee.BookingSystem.Business.Operations.Tours;
using Tourtlee.BookingSystem.Business.Operations.Users;
using Tourtlee.BookingSystem.Business.Operations.UserSettings;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Core;
using Scrutor;

namespace Tourtlee.BookingSystem.Business
{
    public static class IocRegistrations
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // Register operation context
            services.AddScoped<IOperationContext, OperationContext>();

            // Create services
            services.Scan(scan => scan
                .FromAssemblyOf<IBookingsService>()
                    .AddClasses(classes => classes.AssignableTo<IService>())
                        .AsImplementedInterfaces()
                        .WithScopedLifetime());

            // Create operations
            services.Scan(scan => scan
                .FromAssemblyOf<CreateBookingOperation>()
                    .AddClasses(classes => classes.AssignableTo<OperationBase>())
                        .AsSelf()
                        .WithTransientLifetime());
        }
    }
}
