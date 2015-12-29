using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Business.Dto.Schedule
{
    public class ScheduleByWeekdayDto
    {
        public List<ScheduleByWeekdayItemDto> Weekdays { get; set; }
        public Guid IdScheduleJson { get; set; }
        public Guid IdTour { get; set; }
    }

    public class ScheduleByWeekdayItemDto
    {
        public DayOfWeek DayOfWeek { get; set; }
        public DateTime Time { get; set; }
        public bool IsActive { get; set; }
    }
}
