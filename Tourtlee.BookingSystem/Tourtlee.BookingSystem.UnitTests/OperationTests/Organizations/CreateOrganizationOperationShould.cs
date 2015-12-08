using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NSubstitute;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Xunit;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Operations.Core;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Organizations
{
    public class CreateOrganizationOperationShould : OperationBaseTest
    {
        private readonly IOrganizationRepository _organizationRepository;
        private readonly IOperationContext _operationContext;

        public CreateOrganizationOperationShould()
        {
            _organizationRepository = Substitute.For<IOrganizationRepository>();
            _operationContext = Substitute.For<IOperationContext>();
        }

        [Fact]
        public void CreateNewOrganization()
        {
            var cmd = new CreateOrganizationOperation(_operationContext, _organizationRepository);
            cmd.Operate(new OrganizationDto
            {
                Name = "Test org"
            });

            _organizationRepository.Received().Create(Arg.Any<Organization>());
            _organizationRepository.Received().Save();
        }
    }
}
