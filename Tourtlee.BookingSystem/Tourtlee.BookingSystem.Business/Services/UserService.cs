using System;
using Microsoft.Framework.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto.Accounts;
using Tourtlee.BookingSystem.Business.Operations.Users;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IUserService
    {
        UserListDto GetList();
    }

    public class UserService : IUserService
    {
        private readonly IServiceProvider _serviceProvider;

        public UserService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public UserListDto GetList()
        {
            var operation = _serviceProvider.GetRequiredService<GetUserListOperation>();
            return operation.Operate(null);
        }
    }
}
