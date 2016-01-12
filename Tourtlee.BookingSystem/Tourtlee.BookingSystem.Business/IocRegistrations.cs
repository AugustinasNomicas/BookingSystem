using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Operations.Book;
using Tourtlee.BookingSystem.Business.Operations.Bookings;
using Tourtlee.BookingSystem.Business.Operations.Checkin;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Business.Operations.Schedule;
using Tourtlee.BookingSystem.Business.Operations.Tours;
using Tourtlee.BookingSystem.Business.Operations.Users;
using Tourtlee.BookingSystem.Business.Services;

namespace Tourtlee.BookingSystem.Business
{
    public static class IocRegistrations
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // Register operation context
            services.AddScoped<IOperationContext, OperationContext>();

            // Create services
            services.AddScoped<IOrganizationService, OrganizationService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ITourService, TourService>();
            services.AddScoped<IScheduleService, ScheduleService>();
            services.AddScoped<IBookService, BookService>();
            services.AddScoped<IBookingsService, BookingsService>();
            services.AddScoped<ICheckinService, CheckinService>();

            // Organization operations
            services.AddTransient<CreateOrganizationOperation>();
            services.AddTransient<GetOrganizationListOperation>();
            services.AddTransient<GetTourOperation>();
            services.AddTransient<DeleteOrganizationOperation>();
            services.AddTransient<UpdateOrganizationOperation>();
            services.AddTransient<GetTourSelectorItemsOperation>();
            
            //Tour operations
            services.AddTransient<UpdateTourOperation>();
            services.AddTransient<DeleteTourOperation>();
            services.AddTransient<GetTourListOperation>();

            // Schedule operations
            services.AddTransient<GetScheduleForTourOperation>();
            services.AddTransient<UpdateScheduleForTourOperation>();

            // User operations
            services.AddTransient<GetUserListOperation>();
            services.AddTransient<CreateUserOperation>();

            // Book operations
            services.AddTransient<GetInfoForNewBookingOperation>();
            services.AddTransient<CreateBookingOperation>();

            // Bookings operations
            services.AddTransient<GetBookingsListOperation>();

            // Checkin operations
            services.AddTransient<CheckinOperation>();
            services.AddTransient<CancelCheckinOperation>();
        }
    }
}
