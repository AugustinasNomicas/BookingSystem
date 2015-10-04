using System;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.DataAccess.Repositories
{
    public interface IOrganizationRepository : IRepositoryBase<Organization>
    {
    }

    public class OrganizationRepository : RepositoryBase<Organization>, IOrganizationRepository
    {
        public OrganizationRepository(BookingDbContext bookingDbContext) : base(bookingDbContext)
        {
            
        }
    }
}
