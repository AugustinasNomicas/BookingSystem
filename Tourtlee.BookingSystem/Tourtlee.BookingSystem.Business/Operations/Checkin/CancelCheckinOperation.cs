using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;

namespace Tourtlee.BookingSystem.Business.Operations.Checkin
{
    public class CancelCheckinOperation : OperationBase<Guid>
    {
        private readonly IBookingRepository _bookingRepository;

        public CancelCheckinOperation(IOperationContext operationContext, IBookingRepository bookingRepository) : base(operationContext)
        {
            _bookingRepository = bookingRepository;
        }

        protected override void OnOperate(Guid idBooking)
        {
            CancelBookingCheckin(idBooking);
        }

        private void CancelBookingCheckin(Guid idBooking)
        {
            var booking = _bookingRepository.FindBy(b => b.IdBooking == idBooking).Single();
            booking.CheckedIn = false;

            _bookingRepository.Update(booking);
            _bookingRepository.Save();
        }

    }
}
