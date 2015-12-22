using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Business.Dto.Book
{
    public class CreateBookingSetDto
    {
        public Guid IdTour { get; set; }
        public DateTime Date { get; set; }
        public List<CreateBookingDto> Bookings { get; set; }
    }
}
