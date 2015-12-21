using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Business.Dto.Book
{
    public class DateTimeWithAvailabilitiesDto
    {
        public DateTime DateTime {get;set;}
        public int Availabilities { get; set; }
    }
}
