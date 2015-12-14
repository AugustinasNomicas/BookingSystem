using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Model.Schedule
{
    public class ScheduleJson
    {
        [Key]
        public Guid IdScheduleJson { get; set; }

        public Guid IdTour {get;set;}
        public Tour Tour { get; set; }

        public ScheduleJsonTypes ScheduleJsonType {get;set;}

        public string Json {get;set;}
    }
}
