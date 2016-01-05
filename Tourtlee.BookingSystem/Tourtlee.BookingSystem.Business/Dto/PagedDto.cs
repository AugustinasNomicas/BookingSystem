using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Business.Dto
{
    public class PagedDto
    {
        public int Total { get; set; }
        public int PageSize { get; set; } = 50;
        public int CurrentPage { get; set; } = 1;
    }
}
