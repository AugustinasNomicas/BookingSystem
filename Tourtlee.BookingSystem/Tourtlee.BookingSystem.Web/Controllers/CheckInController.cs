using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Services;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Controllers
{
    public class CheckInController : Controller
    {
        private readonly ICheckinService _checkinService;

        public CheckInController(ICheckinService checkinService)
        {
            _checkinService = checkinService;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            var model = _checkinService.GetCheckinInitialValues();
            return View(model);
        }
    }
}
