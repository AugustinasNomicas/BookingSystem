using System;
using System.Collections.Generic;
using System.Linq;
using NSubstitute;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Xunit;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Organizations
{
    public class DeleteOrganizationOperationShould
    {
        private readonly IOrganizationRepository _organizationRepository;

        public DeleteOrganizationOperationShould()
        {
            _organizationRepository = Substitute.For<IOrganizationRepository>();
        }

        [Fact]
        public void DeleteOrganization()
        {
            var organizationToDelete = new Organization
            {
                IdOrganization = new Guid("4fdb9f33-55b2-4a64-8a12-b68068b82e3f")
            };
            _organizationRepository.FindBy(Arg.Any<System.Linq.Expressions.Expression<Func<Organization, bool>>>())
                .Returns((new List<Organization>() { organizationToDelete }).AsQueryable());

            var cmd = new DeleteOrganizationOperation(_organizationRepository);
            cmd.Operate(organizationToDelete.IdOrganization);

            _organizationRepository.Received().Delete(organizationToDelete);
        }
    }
}
