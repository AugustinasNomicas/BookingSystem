using System;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto.Schedule;
using Tourtlee.BookingSystem.Business.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Areas.Manage.Controllers
{
    [Authorize]
    [Area("Manage")]
    public class ScheduleApiController : Controller
    {
        private readonly IScheduleService _scheduleService;

        public ScheduleApiController(IScheduleService scheduleService)
        {
            _scheduleService = scheduleService;
        }

        public ActionResult Index()
        {
            return Ok();
        }

        [HttpGet]
        public ActionResult Get(Guid? idTour)
        {
            var schedule = _scheduleService.GetScheduleForTour(idTour);
            return Ok(schedule);
        }

        [HttpPut]
        public ActionResult Update([FromBody] ScheduleByWeekdayDto item)
        {
            _scheduleService.UpdateScheduleForTour(item);
            return Ok();
        }
    }
}
