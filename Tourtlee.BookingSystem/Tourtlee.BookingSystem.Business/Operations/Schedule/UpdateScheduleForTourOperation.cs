using System.Linq;
using Tourtlee.BookingSystem.Business.Dto.Schedule;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.DataAccess.Helpers;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Schedule;

namespace Tourtlee.BookingSystem.Business.Operations.Schedule
{
    public class UpdateScheduleForTourOperation : OperationBase<ScheduleByWeekdayDto>
    {
        private readonly IScheduleRepository _scheduleRepository;

        public UpdateScheduleForTourOperation(IOperationContext operationContext, 
            IScheduleRepository scheduleRepository) : base(operationContext)
        {
            _scheduleRepository = scheduleRepository;
        }

        protected override void OnOperate(ScheduleByWeekdayDto scheduleByWeekdayDto)
        {
            var scheduleJson = _scheduleRepository.FindBy(s => s.IdScheduleJson == scheduleByWeekdayDto.IdScheduleJson).Single();
            var scheduleByWeekdayJson = scheduleJson.Json.DeserializeToScheduleJson();

            scheduleByWeekdayJson.ListOfDayOfWeeksAndTimes =
            scheduleByWeekdayDto.Weekdays.Where(w => w.IsActive).Select(w => new DayOfWeekWithTime()
            {
                DayOfWeek = w.DayOfWeek,
                Time = w.Time.TimeOfDay
            }).ToList();

            scheduleJson.Json = scheduleByWeekdayJson.Serialize();

            _scheduleRepository.Update(scheduleJson);

            _scheduleRepository.Save();
        }
    }
}
