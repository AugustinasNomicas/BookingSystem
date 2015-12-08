using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Organizations
{
    public class GetOrganizationListOperation : OperationBase<object, List<OrganizationDto>>
    {
        private readonly IOrganizationRepository _organizationRepository;
        public GetOrganizationListOperation(IOperationContext operationContext,
            IOrganizationRepository organizationRepository) : base(operationContext)
        {
            _organizationRepository = organizationRepository;
        }

        protected override List<OrganizationDto> OnOperate(object request)
        {
            var organizations = Mapper.Map<List<OrganizationDto>>(_organizationRepository.GetAll().ToList());
            return organizations;
        }
    }
}
