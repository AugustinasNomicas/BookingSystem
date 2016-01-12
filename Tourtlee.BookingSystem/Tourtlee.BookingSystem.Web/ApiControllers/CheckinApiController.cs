using System;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Model.Requests.Checkin;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.ApiControllers
{
    [Authorize]
    public class CheckinApiController : Controller
    {
        private readonly ICheckinService _checkinService;

        public CheckinApiController(ICheckinService checkinService)
        {
            _checkinService = checkinService;
        }

        public void Index()
        {
            // empty for @Url.Action("Index", "CheckinApi") to work
        }

        [HttpPost]
        public CheckinResult Checkin([FromBody]CheckinRequest request)
        {
            return _checkinService.Checkin(request);
        }

        [HttpPost]
        public void CancelCheckin([FromBody]CancelCheckinRequest request)
        {
            _checkinService.CancelCheckin(request.IdBooking);
        }

    }
}
