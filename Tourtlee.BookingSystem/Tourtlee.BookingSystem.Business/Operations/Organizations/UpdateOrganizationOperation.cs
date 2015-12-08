using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Organizations
{
    public class UpdateOrganizationOperation : OperationBase<OrganizationDto, OrganizationDto>
    {
        private readonly IOrganizationRepository _organizationRepository;

        public UpdateOrganizationOperation(IOperationContext operationContext,
            IOrganizationRepository organizationRepository) : base(operationContext)
        {
            _organizationRepository = organizationRepository;
        }

        protected override OrganizationDto OnOperate(OrganizationDto request)
        {
            var organization = Mapper.Map<Organization>(request);
            _organizationRepository.Update(organization);
            _organizationRepository.Save();

            return request;
        }
    }
}
