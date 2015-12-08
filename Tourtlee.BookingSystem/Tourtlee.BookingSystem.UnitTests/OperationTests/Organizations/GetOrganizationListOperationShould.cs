using NSubstitute;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Xunit;


namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Organizations
{
    public class GetOrganizationListOperationShould : OperationBaseTest
    {
        private readonly IOrganizationRepository _organizationRepository;
        private readonly IOperationContext _operationContext;

        public GetOrganizationListOperationShould()
        {
            _organizationRepository = Substitute.For<IOrganizationRepository>();
            _operationContext = Substitute.For<IOperationContext>();
        }

        [Fact]
        public void ReturnAllOrganizations()
        {
            var cmd = new GetOrganizationListOperation(_operationContext,
                _organizationRepository);
            cmd.Operate(null);

            _organizationRepository.Received().GetAll();
        }
    }
}
