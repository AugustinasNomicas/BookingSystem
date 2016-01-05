using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Model.Requests
{
    public class PagedRequest
    {
        public int PageSize { get; set; } = 50;
        public int CurrentPage { get; set; } = 1;
    }
}
