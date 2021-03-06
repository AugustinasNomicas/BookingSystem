﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Tourtlee.BookingSystem.Model.Book
{
    public class Booking
    {
        [Key]
        public Guid IdBooking { get; set; }
        public Guid IdBookingSet { get; set; }

        public Guid IdTour { get; set; }
        public Tour Tour { get; set; }

        public string BookingNumber { get; set; }

        public DateTime TourDate { get; set; }
        public DateTime BookDate { get; set; }
        public DateTime? CheckinDateTime { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public byte Gender { get; set; }
        public bool IsChild { get; set; }

        public bool CheckedIn { get; set; }
    }
}
