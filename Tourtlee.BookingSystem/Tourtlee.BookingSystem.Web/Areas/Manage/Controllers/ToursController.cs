using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Services;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Areas.Manage.Controllers
{
    [Area("Manage")]
    public class ToursController : Controller
    {
        private readonly ITourService _tourService;

        public ToursController(ITourService tourService)
        {
            _tourService = tourService;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View("Edit", _tourService.GetDefault());
        }

        public IActionResult Create()
        {
            return View("Edit", new TourDto());
        }
    }
}
