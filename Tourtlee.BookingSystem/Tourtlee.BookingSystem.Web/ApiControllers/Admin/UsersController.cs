using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using Tourtlee.BookingSystem.Business.Dto.Accounts;
using Tourtlee.BookingSystem.Business.Services;

namespace Tourtlee.BookingSystem.Web.ApiControllers.Admin
{
    [Route("api/admin/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IList<UserListItemDto> GetList()
        {
            return _userService.GetList();
        }
    }
}
