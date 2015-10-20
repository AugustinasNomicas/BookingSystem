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
    public class UsersController : Controller
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View(_userService.GetList());
        }

        [HttpGet]
        public IActionResult Create()
        {
            object p = null;
            //Product.Models.Product p = new Models.Product();
            //update DB
            try
            {
                return RedirectToAction("Index");
            }
            catch (Exception)
            {

                return View(p);
            }

        }

        [HttpPost]
        public void Create(object createUserDto)
        {
        }
    }
}
