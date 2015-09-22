using AutoMapper;
using System;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Organizations
{
    public class CreateOrganizationOperation : OperationBase<OrganizationDto>
    {
        private readonly IOrganizationRepository _organizationRepository;
        public CreateOrganizationOperation(IOrganizationRepository organizationRepository)
        {
            _organizationRepository = organizationRepository;
        }

        public new void Operate(OrganizationDto organizationDto)
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
