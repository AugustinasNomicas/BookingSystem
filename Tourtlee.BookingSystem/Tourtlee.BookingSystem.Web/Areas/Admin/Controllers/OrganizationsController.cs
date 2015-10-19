using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Services;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class OrganizationsController : Controller
    {
        private readonly IOrganizationService _organizationService;

        public OrganizationsController(IOrganizationService organizationService)
        {
            _organizationService = organizationService;
        }

        public IActionResult Index()
        {
            return View(_organizationService.GetList());
        }
    }
}
