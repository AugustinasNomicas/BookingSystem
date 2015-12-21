using System;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Services;

namespace Tourtlee.BookingSystem.Web.Controllers
{
    public class BookController : Controller
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        // GET: /<controller>/
        public IActionResult Index(Guid? idTour)
        {
            var model = _bookService.GetInfoForNewBooking(idTour);
            return View(model);
        }
    }
}
