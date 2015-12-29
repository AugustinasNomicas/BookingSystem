using System;
using System.Collections.Generic;
using System.Linq;
using Tourtlee.BookingSystem.Business.Dto.Schedule;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.DataAccess.Helpers;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Schedule;

namespace Tourtlee.BookingSystem.Business.Operations.Schedule
{
    public class GetScheduleForTourOperation : OperationBase<Guid?, ScheduleByWeekdayDto>
    {
        private readonly IScheduleRepository _scheduleRepository;
        private readonly ITourService _tourService;

        public GetScheduleForTourOperation(IOperationContext operationContext,
            IScheduleRepository scheduleRepository, ITourService tourService) : base(operationContext)
        {
            _scheduleRepository = scheduleRepository;
            _tourService = tourService;
        }

        protected override ScheduleByWeekdayDto OnOperate(Guid? idTour)
        {
            if (!idTour.HasValue)
                idTour = _tourService.GetDefault().IdTour;

            var schedule = _scheduleRepository.GetScheduleForTour(idTour.Value) ?? CreateNewSchedule(idTour.Value);

            var scheduleByWeekdayJson =  schedule.Json.DeserializeToScheduleJson();

            var dto = BuildDto(scheduleByWeekdayJson);
            dto.IdScheduleJson = schedule.IdScheduleJson;
            dto.IdTour = schedule.IdTour;

            return dto;
        }

        private ScheduleJson CreateNewSchedule(Guid idTour)
        {
            var scheduleJson = new ScheduleJson
            {
                IdScheduleJson = Guid.NewGuid(),
                IdTour = idTour,
                ScheduleJsonType = ScheduleJsonTypes.ByWeekday,
                Json = (new ScheduleByWeekdayJson()
                {
                    PeriodStart = DateTime.MinValue,
                    PeriodEnd = DateTime.MaxValue
                }).Serialize()
            };
            _scheduleRepository.Create(scheduleJson);
            _scheduleRepository.Save();
            return scheduleJson;
        }

        private static ScheduleByWeekdayDto BuildDto(ScheduleByWeekdayJson scheduleByWeekdayJson)
        {
            var scheduleByWeekdayDto = new ScheduleByWeekdayDto {
                Weekdays = new List<ScheduleByWeekdayItemDto>()
            };

            if (scheduleByWeekdayJson.ListOfDayOfWeeksAndTimes == null)
                scheduleByWeekdayJson.ListOfDayOfWeeksAndTimes = new List<DayOfWeekWithTime>();

            var defaultDateTime = new DateTime(2012, 01, 01);

            foreach (DayOfWeek dayOfWeek in Enum.GetValues(typeof(DayOfWeek)))
            {
                var dayOfWeekWithTime = scheduleByWeekdayJson.ListOfDayOfWeeksAndTimes
                    .FirstOrDefault(w => w.DayOfWeek == dayOfWeek);

                scheduleByWeekdayDto.Weekdays.Add(new ScheduleByWeekdayItemDto
                {
                    DayOfWeek = dayOfWeek,
                    IsActive = dayOfWeekWithTime != null,
                    Time = defaultDateTime + (dayOfWeekWithTime?.Time ?? new TimeSpan(0, 0, 0))
                });
            }

            return scheduleByWeekdayDto;
        }
    }
}
