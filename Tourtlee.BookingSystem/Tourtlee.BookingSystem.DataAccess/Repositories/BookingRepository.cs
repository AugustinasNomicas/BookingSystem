using Tourtlee.BookingSystem.Model.Book;

namespace Tourtlee.BookingSystem.DataAccess.Repositories
{
    public interface IBookingRepository : IRepositoryBase<Booking>
    {
    }

    public class BookingRepository : RepositoryBase<Booking>, IBookingRepository
    {
        public BookingRepository(BookingDbContext bookingDbContext) : base(bookingDbContext)
        {
        }
    }
}
