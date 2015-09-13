using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Organizations
{
    public class GetOrganizationListOperation : OperationBase<object, List<OrganizationDto>>
    {
        private readonly IOrganizationRepository _organizationRepository;
        public GetOrganizationListOperation(IOrganizationRepository organizationRepository)
        {
            _organizationRepository = organizationRepository;
        }

        public override List<OrganizationDto> Operate(object request)
        {
            var organizations = Mapper.Map<List<OrganizationDto>>(_organizationRepository.GetAll().ToList());
            return organizations;
        }
    }
}
