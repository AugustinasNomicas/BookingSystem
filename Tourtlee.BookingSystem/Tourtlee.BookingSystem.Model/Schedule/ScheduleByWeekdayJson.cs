using System;
using System.Collections.Generic;

namespace Tourtlee.BookingSystem.Model.Schedule
{
    public class ScheduleByWeekdayJson
    {
        public DateTime PeriodStart { get; set; }
        public DateTime PeriodEnd { get; set; }

        public List<DayOfWeekWithTime> ListOfDayOfWeeksAndTimes { get; set; }
    }

    public class DayOfWeekWithTime
    {
        public DayOfWeek DayOfWeek { get; set; }
        public TimeSpan Time { get; set; }
    }
}
