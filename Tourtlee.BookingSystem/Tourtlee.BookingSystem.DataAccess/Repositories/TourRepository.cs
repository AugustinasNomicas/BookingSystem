using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.DataAccess.Repositories
{
    public interface ITourRepository : IRepositoryBase<Tour>
    {
    }

    public class TourRepository : RepositoryBase<Tour>, ITourRepository
    {
        public TourRepository(BookingDbContext bookingDbContext) : base(bookingDbContext)
        {

        }
    }
}
