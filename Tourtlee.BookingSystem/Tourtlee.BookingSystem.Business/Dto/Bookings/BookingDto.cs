﻿using System;
using System.Collections.Generic;

namespace Tourtlee.BookingSystem.Business.Dto.Bookings
{
    public class BookingsListDto : PagedDto
    {
        public List<BookingDto> Bookings { get; set; } 
    }

    public class BookingDto
    {
        public Guid IdBooking { get; set; }
        public Guid IdBookingSet { get; set; }
        public Guid IdTour { get; set; }
        public DateTime TourDate { get; set; }
        public DateTime BookDate { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public byte Gender { get; set; }
        public bool IsChild { get; set; }
    }
}