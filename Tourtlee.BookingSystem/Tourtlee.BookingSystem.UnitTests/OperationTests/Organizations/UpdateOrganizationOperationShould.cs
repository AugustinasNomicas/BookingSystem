using NSubstitute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Xunit;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Organizations
{
    public class UpdateOrganizationOperationShould : OperationBaseTest
    {
        private readonly IOrganizationRepository _organizationRepository;

        public UpdateOrganizationOperationShould()
        {
            _organizationRepository = Substitute.For<IOrganizationRepository>();
        }

        [Fact]
        public void UpdateOrganization()
        {
            var cmd = new UpdateOrganizationOperation(_organizationRepository);
            cmd.Operate(new OrganizationDto
            {
                Name = "Test org"
            });

            _organizationRepository.Received().Update(Arg.Any<Organization>());
            _organizationRepository.Received().Save();
        }
    }
}
