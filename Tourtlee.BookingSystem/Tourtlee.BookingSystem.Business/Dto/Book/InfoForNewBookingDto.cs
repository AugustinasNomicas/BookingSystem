using System;
using System.Collections.Generic;

namespace Tourtlee.BookingSystem.Business.Dto.Book
{
    public class InfoForNewBookingDto
    {
        public Guid IdTour { get; set; }
        public List<DateTimeWithAvailabilitiesDto> DatesList { get; set; }
    }

}
