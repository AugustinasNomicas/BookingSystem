using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Book;
using Tourtlee.BookingSystem.Model.Requests.Checkin;

namespace Tourtlee.BookingSystem.Business.Operations.Checkin
{
    public class CheckinOperation : OperationBase<CheckinRequest, CheckinResult>
    {
        private readonly IBookingRepository _bookingRepository;

        public CheckinOperation(IOperationContext operationContext, IBookingRepository bookingRepository) : base(operationContext)
        {
            _bookingRepository = bookingRepository;
        }

        protected override CheckinResult OnOperate(CheckinRequest request)
        {
            var result = new CheckinResult();
            if (request.IdBooking.HasValue)
            {
                var booking = CheckinBooking(request.IdBooking.Value);
                result.Success = true;
                result.ResultItems = new List<CheckinResultItem>() { MapBookingToCheckinResultItem(booking) };
                return result;
            }

            var bookings = SearchForBookings(request);
            result.ResultItems = bookings.Select(MapBookingToCheckinResultItem).ToList();

            return result;
        }

        private IEnumerable<Booking> SearchForBookings(CheckinRequest request)
        {
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
                BookDate = booking.BookDate
            };
        }

        private Booking CheckinBooking(Guid idBooking)
        {
            var booking = _bookingRepository.FindBy(b => b.IdBooking == idBooking).Single();
            booking.CheckedIn = true;

            _bookingRepository.Update(booking);
            _bookingRepository.Save();

            return booking;
        }
    }
}
