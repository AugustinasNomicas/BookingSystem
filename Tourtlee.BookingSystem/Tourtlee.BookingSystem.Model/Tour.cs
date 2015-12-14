using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Model.Schedule;

namespace Tourtlee.BookingSystem.Model
{
    public class Tour
    {
        [Key]
        public Guid IdTour { get; set; }

        public Guid IdOrganization { get; set; }
        public Organization Organization { get; set; }

        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public string DescriptionShort { get; set; }
        public int Availabilities { get; set; }

        public ICollection<ScheduleJson> Schedules { get; } = new List<ScheduleJson>();
    }
}
