using System;
using System.ComponentModel;

namespace Tourtlee.BookingSystem.Business.Dto.Accounts
{
    public class CreateUserDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string PasswordRepeat { get; set; }
        public Guid IdOrganization { get; set; }
        public string OrganizationName { get; set; }
        public CreateUserOrganizatioModes OrganizationMode { get; set; }
    }

    public enum CreateUserOrganizatioModes
    {
        Existing = 0,
        Create = 1
    }
}
