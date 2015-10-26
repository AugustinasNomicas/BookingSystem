using System;
using Microsoft.Framework.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto.Accounts;
using Tourtlee.BookingSystem.Business.Operations.Users;
using System.Collections.Generic;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IUserService
    {
        IList<UserListItemDto> GetList();
        void CreateUser(CreateUserDto createUserDto);
    }

    public class UserService : IUserService
    {
        private readonly IServiceProvider _serviceProvider;

        public UserService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public IList<UserListItemDto> GetList()
        {
            var operation = _serviceProvider.GetRequiredService<GetUserListOperation>();
            return operation.Operate(null);
        }

        public void CreateUser(CreateUserDto createUserDto)
        {
            var operation = _serviceProvider.GetRequiredService<CreateUserOperation>();
            operation.Operate(createUserDto);
        }
    }
}
