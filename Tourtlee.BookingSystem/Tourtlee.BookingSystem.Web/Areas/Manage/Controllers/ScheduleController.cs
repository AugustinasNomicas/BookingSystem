using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto.Schedule;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Areas.Manage.Controllers
{
    public class ScheduleController : Controller
    {
        [Authorize]
        [Area("Manage")]
        public IActionResult Index()
        {
            var model = new ScheduleByWeekdayDto
            {
                Weekdays = new List<ScheduleByWeekdayItemDto>
                {
                    new ScheduleByWeekdayItemDto()
                    {
                        DayOfWeek = DayOfWeek.Monday,
                        IsActive = true,
                        Time = DateTime.Now
                    }
                }
            };
            return View(model);
        }
    }
}
