using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Model.Requests.Checkin
{
    public class CheckinProgressRequest
    {
        public Guid IdTour { get; set; }
        public DateTime TourDate { get; set; }
    }
}
