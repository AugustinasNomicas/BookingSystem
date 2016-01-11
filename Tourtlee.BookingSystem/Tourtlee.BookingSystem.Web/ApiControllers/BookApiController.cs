using System;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto.Book;
using Tourtlee.BookingSystem.Business.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.ApiControllers
{
    [Authorize]
    public class BookApiController : Controller
    {
        private readonly IBookService _bookService;

        public BookApiController(IBookService bookService)
        {
            _bookService = bookService;
        }

        public void Index()
        {
            // empty for @Url.Action("Index", "BookApi") to work
        }

        [HttpPost]
        public void Create([FromBody]CreateBookingSetDto request)
        {
            _bookService.CreateBooking(request);
        }

        [HttpGet]
        public InfoForNewBookingDto GetInfoForNewBooking(Guid? id)
        {
            var model = _bookService.GetInfoForNewBooking(id);
            return model;
        }
    }
}
