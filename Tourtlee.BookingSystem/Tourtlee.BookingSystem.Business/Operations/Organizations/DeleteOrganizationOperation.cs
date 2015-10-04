using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Organizations
{
    public class DeleteOrganizationOperation : OperationBase<Guid>
    {
        private readonly IOrganizationRepository _organizationRepository;

        public DeleteOrganizationOperation(IOrganizationRepository organizationRepository)
        {
            _organizationRepository = organizationRepository;

        }

        public new void Operate(Guid request)
        {
            if (Organization.AdminIdOrganization == request)
                throw new ValidationException("Can not delete owner organization");

            var organization = _organizationRepository.FindBy(o => o.IdOrganization == request).Single();
            _organizationRepository.Delete(organization);
            _organizationRepository.Save();
        }
    }
}
