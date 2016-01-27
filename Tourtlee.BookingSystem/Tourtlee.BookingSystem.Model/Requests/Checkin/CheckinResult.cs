using System;
using System.Collections.Generic;

namespace Tourtlee.BookingSystem.Model.Requests.Checkin
{
    public class CheckinResult
    {
        public bool Success { get; set; }
        public IList<CheckinResultItem> ResultItems { get; set; } 
    }

    public class CheckinResultItem
    {
        public Guid IdBooking { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public bool CheckedIn { get; set; }
        public DateTime BookDate { get; set; }
        public string BookingNumber { get; set; }
        public DateTime? CheckinDateTime { get; set; }
    }
}
