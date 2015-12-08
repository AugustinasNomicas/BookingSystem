using System.Linq;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.DataAccess.Repositories
{
    public interface ITourRepository : IRepositoryBase<Tour>
    {
        Tour GetDefault();
    }

    public class TourRepository : RepositoryBase<Tour>, ITourRepository
    {
        public TourRepository(BookingDbContext bookingDbContext) : base(bookingDbContext)
        {
            
        }

        public Tour GetDefault()
        {
            return BookingDbContext.Set<Tour>().FirstOrDefault();
        }
    }
}
