using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Model.Security;


namespace Tourtlee.BookingSystem.Model
{
    public class Organization
    {
        [NotMapped]
        public static readonly Guid AdminIdOrganization = new Guid("00000000-0000-0000-0000-000000000001");

        [Key]
        public Guid IdOrganization { get; set; }

        public string Name { get; set; }

        public ICollection<ApplicationUser> Users { get; } = new List<ApplicationUser>();
    }
}
