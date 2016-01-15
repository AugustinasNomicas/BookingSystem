using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Model.Requests.Checkin
{
    public class CheckinRequest
    {
        public string SearchText { get; set; }
        public Guid? IdBooking { get; set; }
        public Guid IdTour { get; set; }
        public DateTime Date { get; set; }
    }
}
