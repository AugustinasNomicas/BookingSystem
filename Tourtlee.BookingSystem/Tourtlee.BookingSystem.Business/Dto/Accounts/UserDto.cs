using System;


namespace Tourtlee.BookingSystem.Business.Dto.Accounts
{
    public class UserDto
    {
        public Guid IdUser { get; set; }

        public string Email { get; set; } // we will use Email for username also

        public OrganizationDto Organization { get; set; }
    }
}
