using System;

namespace Tourtlee.BookingSystem.Business.Dto.Accounts
{
    public class CreateUserDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool CreateOrganization { get; set; }

        public Guid IdOrganization { get; set; }

        public string OrganizationName { get; set; }
    }
}
