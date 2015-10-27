using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Business.Dto.Accounts;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class UsersApiController : Controller
    {
        private readonly IUserService _userService;

        public UsersApiController(IUserService userService)
        {
            _userService = userService;
        }

        public IEnumerable<UserListItemDto> Index()
        {
            return _userService.GetList();
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateUserDto item)
        {
            if (item == null)
            {
                throw new ArgumentException("Invalid new user");
            }

            try
            {
                _userService.CreateUser(item);
            }
            catch (Exception ex)
            {
                return HttpBadRequest(ex.Message);
            }

            // user created succefuly, return new empty model
            var createUser = new CreateUserDto();
            return Ok(createUser);
        }
    }
}
