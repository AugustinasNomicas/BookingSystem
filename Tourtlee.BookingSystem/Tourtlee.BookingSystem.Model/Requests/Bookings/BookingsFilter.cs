using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Model.Requests.Bookings
{
    public class BookingsFilter : PagedRequest
    {
       public Guid? IdTour { get; set; }
       public string Text { get; set; }
       public Guid? IdBookingSet { get; set; }
    }
}
