using System;
using System.Linq;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Requests.UserSettings;

namespace Tourtlee.BookingSystem.Business.Operations.UserSettings
{
    public class GetUserSettingOperation : OperationBase<UserSettingNames, string>
    {
        private readonly IUserSettingsRepository _userSettingsRepository;

        public GetUserSettingOperation(IOperationContext operationContext, 
            IUserSettingsRepository userSettingsRepository) : base(operationContext)
        {
            _userSettingsRepository = userSettingsRepository;
        }

        protected override string OnOperate(UserSettingNames request)
        {
            var idApplicationUser = Guid.Parse(OperationContext.User.Id);
            var existingSetting = _userSettingsRepository.FindBy(u => u.IdApplicationUser == idApplicationUser
            && u.Name == request.ToString()).FirstOrDefault();

            return existingSetting != null ? existingSetting.Value : string.Empty;
        }
    }
}
