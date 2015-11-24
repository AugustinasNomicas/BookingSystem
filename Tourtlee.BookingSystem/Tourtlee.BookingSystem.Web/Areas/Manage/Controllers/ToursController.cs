﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto.Tours;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Areas.Manage.Controllers
{
    [Area("Manage")]
    public class ToursController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View("Edit", new TourDto() { Name = "test tour"});
        }
    }
}
