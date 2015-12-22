using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Business.Dto.Book
{
    public class CreateBookingDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public bool Child { get; set; }
    }
}
