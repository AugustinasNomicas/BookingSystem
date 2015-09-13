using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NSubstitute;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Xunit;
using Xunit.Sdk;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Organizations
{
    
    public class GetOrganizationListOperationShould
    {
        private readonly IOrganizationRepository _organizationRepository;
        public GetOrganizationListOperationShould()
        {
            _organizationRepository = Substitute.For<IOrganizationRepository>();
        }

        [Fact]
        public void ReturnAllOrganizations()
        {
            var cmd = new GetOrganizationListOperation(_organizationRepository);
            cmd.Operate(null);

            _organizationRepository.Received().GetAll();
        }
    }
}
