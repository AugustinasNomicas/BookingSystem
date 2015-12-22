using System;
using Tourtlee.BookingSystem.Business.Dto.Book;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Book;

namespace Tourtlee.BookingSystem.Business.Operations.Book
{
    public class CreateBookingOperation : OperationBase<CreateBookingSetDto>
    {
        private readonly IBookingRepository _bookingRepository;
        public CreateBookingOperation(IOperationContext operationContext, IBookingRepository bookingRepository) : base(operationContext)
        {
            _bookingRepository = bookingRepository;
        }

        protected override void OnOperate(CreateBookingSetDto request)
        {
            var idBookingSet = Guid.NewGuid();

            foreach (var createBookingDto in request.Bookings)
            {
                var booking = CreateBooking(idBookingSet, request.IdTour, request.Date, createBookingDto);
                _bookingRepository.Create(booking);
            }

            _bookingRepository.Save();
        }

        private Booking CreateBooking(Guid idBookingSet, Guid idTour, DateTime tourDate, CreateBookingDto createBookingDto)
        {
            return new Booking
            {
                IdBooking = Guid.NewGuid(),
                IdBookingSet = idBookingSet,
                BookDate = DateTime.Now,
                TourDate = tourDate,
                IdTour = idTour,
                Firstname = createBookingDto.FirstName,
                Lastname = createBookingDto.LastName,
                Gender = (byte)createBookingDto.Gender,
                IsChild = createBookingDto.Child,

            };
        }

    }
}
