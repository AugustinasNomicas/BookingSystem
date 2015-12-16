using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Model.Schedule;

namespace Tourtlee.BookingSystem.DataAccess.Repositories
{
    public interface IScheduleRepository: IRepositoryBase<ScheduleJson>
    {
        ScheduleJson GetScheduleForTour(Guid idTour);
    }
    public class ScheduleRepository : RepositoryBase<ScheduleJson>, IScheduleRepository
    {
        public ScheduleRepository(BookingDbContext bookingDbContext) : base(bookingDbContext)
        {
        }

        public ScheduleJson GetScheduleForTour(Guid idTour)
        {
            return FindBy(s => s.IdTour == idTour).SingleOrDefault();
        }
    }
}
