using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Tourtlee.BookingSystem.Business.Dto.Accounts
{
    public class CreateUserDto
    {
        [Required, DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required, DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        public string PasswordRepeat { get; set; }

        public Guid? IdOrganization { get; set; }
        public string OrganizationName { get; set; }
        
        public CreateUserOrganizatioModes OrganizationMode { get; set; }
    }

    public enum CreateUserOrganizatioModes
    {
        Existing = 0,
        Create = 1
    }
}
