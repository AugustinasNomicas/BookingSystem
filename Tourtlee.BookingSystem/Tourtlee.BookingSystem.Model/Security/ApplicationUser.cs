using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Authentication;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity.Metadata;

namespace Tourtlee.BookingSystem.Model.Security
{
    public class ApplicationUser : IdentityUser
    {
        public Guid IdOrganization { get; set; }
        public ICollection<Organization> Organization { get; set; }
    }
}
