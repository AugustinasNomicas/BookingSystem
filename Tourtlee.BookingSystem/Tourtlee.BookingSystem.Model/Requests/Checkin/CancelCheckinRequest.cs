using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Model.Requests.Checkin
{
    public class CancelCheckinRequest
    {
        public Guid IdBooking { get; set; }
    }
}
