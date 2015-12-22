using System;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto.Book;
using Tourtlee.BookingSystem.Business.Operations.Book;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IBookService
    {
        InfoForNewBookingDto GetInfoForNewBooking(Guid? idTour);
        void CreateBooking(CreateBookingSetDto createBookingSetDto);
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

        public void CreateBooking(CreateBookingSetDto createBookingSetDto)
        {
            var operation = _serviceProvider.GetRequiredService<CreateBookingOperation>();
            operation.Operate(createBookingSetDto);
        }
    }
}
