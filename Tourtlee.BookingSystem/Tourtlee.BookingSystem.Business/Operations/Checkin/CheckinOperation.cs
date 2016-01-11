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
                CheckinBooking(request.IdBooking.Value);
                result.Success = true;
                return result;
            }

            var bookings = SearchForBookings(request.SearchText);
            result.ResultItems = bookings.Select(b => new CheckinResultItem
            {
                IdBooking = b.IdBooking,
                Firstname = b.Firstname,
                Lastname = b.Lastname,
                BookDate = b.BookDate
            }).ToList();

            return result;
        }

        private IEnumerable<Booking> SearchForBookings(string text)
        {
            var words = Regex.Split(text, @"\W");
            var result = new List<Booking>();
            foreach (var word in words)
            {
               result.AddRange(_bookingRepository.FindBy(s => 
               s.Firstname.StartsWith(word, StringComparison.CurrentCultureIgnoreCase) 
               || s.Lastname.StartsWith(word, StringComparison.CurrentCultureIgnoreCase)));
            }

            return result.OrderBy(b => b.Firstname).ThenBy(b => b.Lastname).Take(100);
        } 

        private void CheckinBooking(Guid idBooking)
        {
            var booking = _bookingRepository.FindBy(b => b.IdBooking == idBooking).Single();
            booking.CheckedIn = true;

            _bookingRepository.Update(booking);
            _bookingRepository.Save();
        }
    }
}
