using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;

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
            var organization = _organizationRepository.FindBy(o => o.IdOrganization == request).Single();
            _organizationRepository.Delete(organization);
            _organizationRepository.Save();
        }
    }
}
