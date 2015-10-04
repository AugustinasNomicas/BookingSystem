using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Business.Dto.Accounts
{
    public class UserListDto
    {
        public IList<UserListItemDto> UserList { get; set; }
    }

    public class UserListItemDto
    {
        public Guid IdUser { get; set; }
        public string Email { get; set; } // we will use Email for username also

        public string OrganizationName { get; set; }
        public Guid IdOrganization { get; set; }
    }
}
