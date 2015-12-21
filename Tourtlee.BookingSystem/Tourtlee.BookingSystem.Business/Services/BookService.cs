using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto.Book;
using Tourtlee.BookingSystem.Business.Operations.Book;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IBookService
    {
        InfoForNewBookingDto GetInfoForNewBooking(Guid? idTour);
    }

    public class BookService : IBookService
    {
        private readonly IServiceProvider _serviceProvider;

        public BookService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public InfoForNewBookingDto GetInfoForNewBooking(Guid? idTour)
        {
            var operation = _serviceProvider.GetRequiredService<GetInfoForNewBookingOperation>();
            return operation.Operate(idTour);
        }
    }
}
