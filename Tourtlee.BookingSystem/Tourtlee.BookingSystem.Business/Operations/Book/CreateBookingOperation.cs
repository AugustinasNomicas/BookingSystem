using System;
using Tourtlee.BookingSystem.Business.Dto.Book;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Book;
using Tourtlee.BookingSystem.Model.Requests.UserSettings;

namespace Tourtlee.BookingSystem.Business.Operations.Book
{
    public class CreateBookingOperation : OperationBase<CreateBookingSetDto, Guid>
    {
        private readonly IBookingRepository _bookingRepository;
        private readonly IUserSettingsService _userSettingsService;
        private readonly IBookService _bookService;

        public CreateBookingOperation(IOperationContext operationContext, IBookingRepository bookingRepository, IUserSettingsService userSettingsService, IBookService bookService) : base(operationContext)
        {
            _bookingRepository = bookingRepository;
            _userSettingsService = userSettingsService;
            _bookService = bookService;
        }

        protected override Guid OnOperate(CreateBookingSetDto request)
        {
            var idBookingSet = Guid.NewGuid();

            foreach (var createBookingDto in request.Bookings)
            {
                var booking = CreateBooking(idBookingSet, request.IdTour, request.Date, createBookingDto);
                _bookingRepository.Create(booking);
            }

            _userSettingsService.SetUserSetting(new SetUserSettingRequest
            {
                UserSettingName = UserSettingNames.DefaultTour,
                Value = request.IdTour.ToString()
            });

            _bookingRepository.Save();
            return idBookingSet;
        }

        private Booking CreateBooking(Guid idBookingSet, Guid idTour, DateTime tourDate, CreateBookingDto createBookingDto)
        {
            var bookingNumber = _bookService.GenerateBookingNumber();

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
                BookingNumber = bookingNumber,
            };
        }

    }
}
