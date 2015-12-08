using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNet.Identity;
using Microsoft.Data.Entity;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Dto.Accounts;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.Model.Security;

namespace Tourtlee.BookingSystem.Business.Operations.Users
{
    public class GetUserListOperation : OperationBase<object, IList<UserListItemDto>>
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public GetUserListOperation(IOperationContext operationContext,
            UserManager<ApplicationUser> userManager) : base(operationContext)
        {
            _userManager = userManager;
        }

        protected override IList<UserListItemDto> OnOperate(object request)
        {
            var users = _userManager.Users.Include(u => u.Organization).ToList();
            return Mapper.Map<List<UserListItemDto>>(users);
        }
    }
}
