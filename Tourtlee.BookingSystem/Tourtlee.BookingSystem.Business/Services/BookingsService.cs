using System;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto.Bookings;
using Tourtlee.BookingSystem.Business.Operations.Bookings;
using Tourtlee.BookingSystem.Model.Requests.Bookings;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IBookingsService
    {
        BookingsListDto GetBookingsList(BookingsFilter filter);
    }

    public class BookingsService : IBookingsService
    {
        private readonly IServiceProvider _serviceProvider;

        public BookingsService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public BookingsListDto GetBookingsList(BookingsFilter filter)
        {
            var operation = _serviceProvider.GetRequiredService<GetBookingsListOperation>();
            return operation.Operate(filter);
        }
    }
}
