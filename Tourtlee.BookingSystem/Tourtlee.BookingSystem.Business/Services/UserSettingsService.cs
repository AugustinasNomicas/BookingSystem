using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Business.Operations.UserSettings;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.Model.Requests.UserSettings;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IUserSettingsService
    {
        string GetUserSetting(UserSettingNames userSetting);
        void SetUserSetting(SetUserSettingRequest request);
    }

    public class UserSettingsService : ServiceBase, IUserSettingsService
    {
        private readonly IServiceProvider _serviceProvider;

        public UserSettingsService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public string GetUserSetting(UserSettingNames userSetting)
        {
            var operation = _serviceProvider.GetRequiredService<GetUserSettingOperation>();
            return operation.Operate(userSetting);
        }

        public void SetUserSetting(SetUserSettingRequest request)
        {
            var operation = _serviceProvider.GetRequiredService<SetUserSettingOperation>();
            operation.Operate(request);
        }
    }
}
