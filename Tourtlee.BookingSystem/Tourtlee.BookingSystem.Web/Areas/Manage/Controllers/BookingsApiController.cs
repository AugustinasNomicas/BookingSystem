using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto.Bookings;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Model.Requests.Bookings;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Areas.Manage.Controllers
{
    [Authorize]
    [Area("Manage")]
    public class BookingsApiController : Controller
    {
        private readonly IBookingsService _bookingsService;

        public BookingsApiController(IBookingsService bookingsService)
        {
            _bookingsService = bookingsService;
        }

        // GET: api/values
        [HttpGet]
        public BookingsListDto Get(BookingsFilter filter)
        {
            if (filter == null)
                filter = new BookingsFilter();

            return _bookingsService.GetBookingsList(filter);
        }

        [HttpGet]
        public ActionResult Export(BookingsFilter filter)
        {
            if (filter == null)
                filter = new BookingsFilter();

            var memoryStream = _bookingsService.ExportBookingsList(filter);
            return File(memoryStream.ToArray(), "text/csv", "bookings.csv");
        }
    }
}
