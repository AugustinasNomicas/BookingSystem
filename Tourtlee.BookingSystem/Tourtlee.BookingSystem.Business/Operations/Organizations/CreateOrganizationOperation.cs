using AutoMapper;
using System;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Organizations
{
    public class CreateOrganizationOperation : OperationBase<OrganizationDto>
    {
        private readonly IOrganizationRepository _organizationRepository;
        public CreateOrganizationOperation(IOperationContext operationContext, 
            IOrganizationRepository organizationRepository) : base(operationContext)
        {
            _organizationRepository = organizationRepository;
        }

        protected override void OnOperate(OrganizationDto organizationDto)
        {
            if (organizationDto.IdOrganization == default(Guid))
            {
                organizationDto.IdOrganization = Guid.NewGuid();
            }

            var organization = Mapper.Map<Organization>(organizationDto);

            _organizationRepository.Create(organization);

            _organizationRepository.Save();
        }
    }
}
