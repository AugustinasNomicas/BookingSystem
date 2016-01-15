using System;
using System.Collections.Generic;
using System.Linq;
using Tourtlee.BookingSystem.Business.Dto.Book;
using Tourtlee.BookingSystem.Business.Dto.Schedule;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Services;

namespace Tourtlee.BookingSystem.Business.Operations.Book
{
    public class GetInfoForNewBookingOperation : OperationBase<Guid?, InfoForNewBookingDto>
    {
        private readonly IScheduleService _scheduleService;
        private readonly ITourService _tourService;

        public GetInfoForNewBookingOperation(IOperationContext operationContext,
            IScheduleService scheduleService, ITourService tourService) : base(operationContext)
        {
            _scheduleService = scheduleService;
            _tourService = tourService;
        }

        protected override InfoForNewBookingDto OnOperate(Guid? idTour)
        {
            var tourDto = idTour.HasValue ? _tourService.Get(idTour.Value) : _tourService.GetDefault();

            var schedule = _scheduleService.GetScheduleForTour(tourDto.IdTour);

            var infoForNewBookingDto = new InfoForNewBookingDto
            {
                IdTour = tourDto.IdTour,
                DatesList = GetDates(schedule, tourDto)
            };

            return infoForNewBookingDto;
        }

        private List<DateTimeWithAvailabilitiesDto> GetDates(ScheduleByWeekdayDto schedule, TourDto tour)
        {
            var start = DateTime.Now;
            var yearEnd = DateTime.Now.AddDays(182); // add half a year

            var dates = Enumerable.Range(0, 1 + yearEnd.Subtract(start).Days)
           .Select(offset => start.AddDays(offset))
           .Where(dt => schedule.Weekdays.Where(w => w.IsActive).FirstOrDefault(w => w.DayOfWeek == dt.DayOfWeek) != null);

            dates = dates.Select(dt => new DateTime(dt.Year, dt.Month, dt.Day)
            + schedule.Weekdays.First(w => w.DayOfWeek == dt.DayOfWeek).Time.TimeOfDay);

            return dates.Select(dt => new DateTimeWithAvailabilitiesDto
            {
                DateTime = dt,
                Availabilities = tour.Availabilities
            }).OrderBy(d => d.DateTime).ToList();
        }
    }
}
