using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNet.Identity;
using Microsoft.Data.Entity;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Dto.Accounts;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.Model.Security;

namespace Tourtlee.BookingSystem.Business.Operations.Users
{
    public class GetUserListOperation : OperationBase<object, UserListDto>
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public GetUserListOperation(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public override UserListDto Operate(object request)
        {
            var users = _userManager.Users.Include(u => u.Organization).ToList();
            return new UserListDto
            {
                UserList = Mapper.Map<List<UserListItemDto>>(users)
            };
        }
    }
}
