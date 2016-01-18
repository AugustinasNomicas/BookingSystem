using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Model.Security;

namespace Tourtlee.BookingSystem.Model
{
    public class UserSetting
    {
        [Key]
        public Guid IdUserSettting { get; set; }

        public Guid IdApplicationUser { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }
}
