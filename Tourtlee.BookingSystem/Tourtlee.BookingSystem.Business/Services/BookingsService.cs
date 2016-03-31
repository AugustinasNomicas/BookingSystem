using System;
using System.IO;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto.Bookings;
using Tourtlee.BookingSystem.Business.Operations.Bookings;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.Model.Requests.Bookings;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IBookingsService
    {
        BookingsListDto GetBookingsList(BookingsFilter filter);
        MemoryStream ExportBookingsList(BookingsFilter filter);
    }

    public class BookingsService : ServiceBase, IBookingsService
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

        public MemoryStream ExportBookingsList(BookingsFilter filter)
        {
            var operation = _serviceProvider.GetRequiredService<ExportBookingsListOperation>();
            return operation.Operate(filter);
        }
    }
}
