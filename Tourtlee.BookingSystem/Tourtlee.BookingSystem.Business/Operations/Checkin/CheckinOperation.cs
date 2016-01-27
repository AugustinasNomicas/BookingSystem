using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Book;
using Tourtlee.BookingSystem.Model.Requests.Checkin;
using Tourtlee.BookingSystem.Model.Requests.UserSettings;

namespace Tourtlee.BookingSystem.Business.Operations.Checkin
{
    public class CheckinOperation : OperationBase<CheckinRequest, CheckinResult>
    {
        private readonly IBookingRepository _bookingRepository;
        private readonly IUserSettingsService _userSettingsService;

        public CheckinOperation(IOperationContext operationContext,
            IBookingRepository bookingRepository, IUserSettingsService userSettingsService) : base(operationContext)
        {
            _bookingRepository = bookingRepository;
            _userSettingsService = userSettingsService;
        }

        protected override CheckinResult OnOperate(CheckinRequest request)
        {
            _userSettingsService.SetUserSetting(new SetUserSettingRequest
            {
                UserSettingName = UserSettingNames.DefaultTour,
                Value = request.IdTour.ToString()
            });

            var result = new CheckinResult();
            if (request.IdBooking.HasValue)
            {
                return CheckinByIdBooking(request.IdBooking.Value);
            }

            var bookings = SearchForBookings(request).ToList();

            // checkin if got one hit and it is from BookingNumber
            if (bookings.Count == 1
                && string.Equals(bookings.Single().BookingNumber, request.SearchText,
                StringComparison.CurrentCultureIgnoreCase))
            {
                return CheckinByBookingNumber(bookings.Single());
            }

            result.ResultItems = bookings.Select(MapBookingToCheckinResultItem).ToList();
            return result;
        }

        private IEnumerable<Booking> SearchForBookings(CheckinRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.SearchText))
                return new Booking[0];

            var words = Regex.Split(request.SearchText, @"\W");
            var result = new List<Booking>();

            var bookingsForTour = _bookingRepository.FindBy(b => b.IdTour == request.IdTour
            && b.TourDate == request.Date);

            foreach (var word in words)
            {
                result.AddRange(bookingsForTour.Where(s =>
                s.Firstname.StartsWith(word, StringComparison.CurrentCultureIgnoreCase)
                || s.Lastname.StartsWith(word, StringComparison.CurrentCultureIgnoreCase)));
            }

            result.AddRange(bookingsForTour.Where(s =>
            string.Equals(s.BookingNumber, request.SearchText, StringComparison.CurrentCultureIgnoreCase)));

            return result.OrderBy(b => b.Firstname).ThenBy(b => b.Lastname).Take(100);
        }

        private CheckinResultItem MapBookingToCheckinResultItem(Booking booking)
        {
            return new CheckinResultItem
            {
                IdBooking = booking.IdBooking,
                Firstname = booking.Firstname,
                Lastname = booking.Lastname,
                CheckedIn = booking.CheckedIn,
                BookDate = booking.BookDate,
                BookingNumber = booking.BookingNumber,
                CheckinDateTime = booking.CheckinDateTime
            };
        }

        private CheckinResult CheckinByBookingNumber(Booking booking)
        {
            var result = new CheckinResult
            {
                ResultItems = new List<CheckinResultItem> { MapBookingToCheckinResultItem(booking) }
            };

            if (booking.CheckedIn) return result;

            booking = CheckinBooking(booking);
            result.Success = booking.CheckedIn;

            return result;
        }

        private CheckinResult CheckinByIdBooking(Guid idBooking)
        {
            var result = new CheckinResult() { ResultItems = new List<CheckinResultItem>() };
            var booking = _bookingRepository.FindBy(b => b.IdBooking == idBooking).SingleOrDefault();

            if (booking == null) // booking not found
                return result;

            result.ResultItems = new List<CheckinResultItem> { MapBookingToCheckinResultItem(booking) };

            if (booking.CheckedIn) // booking already is checked in
                return result;

            CheckinBooking(booking);
            result.Success = booking.CheckedIn;

            return result;
        }

        private Booking CheckinBooking(Booking booking)
        {
            booking.CheckedIn = true;
            booking.CheckinDateTime = DateTime.Now;

            _bookingRepository.Update(booking);
            _bookingRepository.Save();

            return booking;
        }
    }
}
