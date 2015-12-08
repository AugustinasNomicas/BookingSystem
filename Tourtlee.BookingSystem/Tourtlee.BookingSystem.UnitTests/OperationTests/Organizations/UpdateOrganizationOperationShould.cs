using NSubstitute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Xunit;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Organizations
{
    public class UpdateOrganizationOperationShould : OperationBaseTest
    {
        private readonly IOrganizationRepository _organizationRepository;
        private readonly IOperationContext _operationContext;

        public UpdateOrganizationOperationShould()
        {
            _organizationRepository = Substitute.For<IOrganizationRepository>();
            _operationContext = Substitute.For<IOperationContext>();
        }

        [Fact]
        public void UpdateOrganization()
        {
            var cmd = new UpdateOrganizationOperation(_operationContext, _organizationRepository);
            cmd.Operate(new OrganizationDto
            {
                Name = "Test org"
            });

            _organizationRepository.Received().Update(Arg.Any<Organization>());
            _organizationRepository.Received().Save();
        }
    }
}
