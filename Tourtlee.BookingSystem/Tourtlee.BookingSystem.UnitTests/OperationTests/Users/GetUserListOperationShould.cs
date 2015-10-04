using Microsoft.AspNet.Identity;
using NSubstitute;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Business.Operations.Users;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Security;
using Xunit;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Users
{
    public class GetUserListOperationShould : OperationBaseTest
    {
        //private readonly UserManager<ApplicationUser> _userManager;

        public GetUserListOperationShould()
        {
            //_userManager = Substitute.For<UserManager<ApplicationUser>>();
        }

        [Fact(Skip = "Need to implement UserManager as interface")]
        public void ReturnAllOrganizations()
        {
            // TODO create a mock for UserManager
            //var cmd = new GetUserListOperation(_userManager);
            //cmd.Operate(null);
        }
    }
}
