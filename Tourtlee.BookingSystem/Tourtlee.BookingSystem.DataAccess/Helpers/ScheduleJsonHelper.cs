using Newtonsoft.Json;
using Tourtlee.BookingSystem.Model.Schedule;

namespace Tourtlee.BookingSystem.DataAccess.Helpers
{
    public static class ScheduleJsonHelper
    {
        public static ScheduleByWeekdayJson DeserializeToScheduleJson(this string json)
        {
            return JsonConvert.DeserializeObject<ScheduleByWeekdayJson>(json);
        }

        public static string Serialize(this ScheduleByWeekdayJson scheduleJson)
        {
            return JsonConvert.SerializeObject(scheduleJson);
        }
    }
}
