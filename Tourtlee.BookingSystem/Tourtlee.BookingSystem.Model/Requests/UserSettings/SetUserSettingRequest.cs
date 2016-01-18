using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Model.Requests.UserSettings
{
    public class SetUserSettingRequest
    {
        public UserSettingNames UserSettingName { get; set; }
        public string Value { get; set; }
    }
}
