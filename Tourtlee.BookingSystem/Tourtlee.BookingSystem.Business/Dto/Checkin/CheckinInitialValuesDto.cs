using System;
using System.Collections.Generic;

namespace Tourtlee.BookingSystem.Business.Dto.Checkin
{
    public class CheckinInitialValuesDto
    {
        public Guid IdTour {get;set;}
        public DateTime Date {get;set;}
        public List<DateTime> DatesList { get; set; }
    }
}
