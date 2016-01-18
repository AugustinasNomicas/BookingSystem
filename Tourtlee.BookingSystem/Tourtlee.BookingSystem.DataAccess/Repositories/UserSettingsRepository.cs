using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.DataAccess.Repositories
{
    public interface IUserSettingsRepository : IRepositoryBase<UserSetting>
    {
    }

    public class UserSettingsRepository : RepositoryBase<UserSetting>, IUserSettingsRepository
    {
        public UserSettingsRepository(BookingDbContext bookingDbContext) : base(bookingDbContext)
        {
        }
    }
}
