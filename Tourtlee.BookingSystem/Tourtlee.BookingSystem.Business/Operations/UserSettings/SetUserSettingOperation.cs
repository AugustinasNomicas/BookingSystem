using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Tourtlee.BookingSystem.Model.Requests.UserSettings;

namespace Tourtlee.BookingSystem.Business.Operations.UserSettings
{
    public class SetUserSettingOperation : OperationBase<SetUserSettingRequest>
    {
        private readonly IUserSettingsRepository _userSettingsRepository;

        public SetUserSettingOperation(IOperationContext operationContext,
            IUserSettingsRepository userSettingsRepository) : base(operationContext)
        {
            _userSettingsRepository = userSettingsRepository;
        }

        protected override void OnOperate(SetUserSettingRequest request)
        {
            var idApplicationUser = Guid.Parse(OperationContext.User.Id);
            var existingSetting = _userSettingsRepository.FindBy(u => u.IdApplicationUser == idApplicationUser
            && u.Name == request.UserSettingName.ToString()).FirstOrDefault();

            if (existingSetting != null)
            {
                existingSetting.Value = request.Value;
            }
            else
            {
                var userSetting = new UserSetting
                {
                    IdUserSettting = Guid.NewGuid(),
                    IdApplicationUser = idApplicationUser,
                    Name = request.UserSettingName.ToString(),
                    Value = request.Value
                };
                _userSettingsRepository.Create(userSetting);
            }

            _userSettingsRepository.Save();
        }
    }
}
