using System;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Organizations
{
    public class CreateOrganizationOperation : OperationBase<string>
    {
        private readonly IOrganizationRepository _organizationRepository;
        public CreateOrganizationOperation(IOrganizationRepository organizationRepository)
        {
            _organizationRepository = organizationRepository;
        }

        public new void Operate(string request)
        {
            _organizationRepository.Create(new Organization
            {
                IdOrganization = Guid.NewGuid(),
                Name = request
            });

            _organizationRepository.Save();
        }
    }
}
