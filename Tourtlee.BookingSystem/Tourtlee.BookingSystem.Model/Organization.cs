using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;


namespace Tourtlee.BookingSystem.Model
{
    public class Organization
    {
        [Key]
        public Guid IdOrganization { get; set; }

        public string Name { get; set; }
    }
}
