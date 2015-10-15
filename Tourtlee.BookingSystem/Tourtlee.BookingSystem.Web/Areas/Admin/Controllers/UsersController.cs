using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class UsersController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
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
