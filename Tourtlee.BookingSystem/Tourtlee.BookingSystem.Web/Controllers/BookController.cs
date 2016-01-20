using System;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Model.Requests.Bookings;

namespace Tourtlee.BookingSystem.Web.Controllers
{
    [Authorize]
    public class BookController : Controller
    {
        private readonly IBookService _bookService;
        private readonly IBookingsService _bookingsService;

        public BookController(IBookService bookService, IBookingsService bookingsService)
        {
            _bookService = bookService;
            _bookingsService = bookingsService;
        }

        // GET: /<controller>/
        public IActionResult Index(Guid? idTour)
        {
            var model = _bookService.GetInfoForNewBooking(idTour);
            return View(model);
        }

        public IActionResult Show(Guid id)
        {
            var bookings = _bookingsService.GetBookingsList(new BookingsFilter
            {
                IdBookingSet = id
            });
            return View(bookings);
        }
    }
}
