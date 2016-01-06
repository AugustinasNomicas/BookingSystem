using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Areas.Manage.Controllers
{
    [Authorize]
    [Area("Manage")]
    public class BookingsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
