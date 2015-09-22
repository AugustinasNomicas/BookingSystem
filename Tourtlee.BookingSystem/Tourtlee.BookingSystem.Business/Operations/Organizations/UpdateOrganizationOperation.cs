using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Organizations
{
    public class UpdateOrganizationOperation : OperationBase<OrganizationDto>
    {
        private readonly IOrganizationRepository _organizationRepository;

        public UpdateOrganizationOperation(IOrganizationRepository organizationRepository)
        {
            _organizationRepository = organizationRepository;
        }

        public override void Operate(OrganizationDto request)
        {
            var organization = Mapper.Map<Organization>(request);
            _organizationRepository.Update(organization);
            _organizationRepository.Save();
        }
    }
}
