using System;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto.Schedule;
using Tourtlee.BookingSystem.Business.Operations.Schedule;
using Tourtlee.BookingSystem.Core;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IScheduleService
    {
        ScheduleByWeekdayDto GetScheduleForTour(Guid? idTour);
        void UpdateScheduleForTour(ScheduleByWeekdayDto scheduleByWeekdayDto);
    }

    public class ScheduleService : ServiceBase, IScheduleService
    {
        private readonly IServiceProvider _serviceProvider;

        public ScheduleService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public ScheduleByWeekdayDto GetScheduleForTour(Guid? idTour)
        {
           var operation = _serviceProvider.GetRequiredService<GetScheduleForTourOperation>();
            return operation.Operate(idTour);
        }

        public void UpdateScheduleForTour(ScheduleByWeekdayDto scheduleByWeekdayDto)
        {
            var operation = _serviceProvider.GetRequiredService<UpdateScheduleForTourOperation>();
            operation.Operate(scheduleByWeekdayDto);
        }
    }
}
