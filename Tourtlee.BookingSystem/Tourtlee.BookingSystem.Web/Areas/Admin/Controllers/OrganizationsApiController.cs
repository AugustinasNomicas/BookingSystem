using System;
using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Web.Infastructure;

namespace Tourtlee.BookingSystem.Web.ApiControllers.Admin
{
    [Area("Admin")]
    public class OrganizationsApiController : Controller, ICrudApiController<OrganizationDto>
    {
        private readonly IOrganizationService _organizationService;

        public OrganizationsApiController(IOrganizationService organizationService)
        {
            _organizationService = organizationService;
        }

        public OrganizationDto Get(Guid id)
        {
            return _organizationService.Get(id);
        }

        public IEnumerable<OrganizationDto> Index()
        {
            return _organizationService.GetList();
        }

        [HttpPost]
        public OrganizationDto Create([FromBody] OrganizationDto item)
        {
            if (item == null)
            {
                throw new ArgumentException("Invalid Organization");
            }

            _organizationService.Create(item);
            return item;
        }

        [HttpPut]
        public OrganizationDto Update([FromBody] OrganizationDto item)
        {
            if (item.IdOrganization == Guid.Empty)
            {
                throw new ArgumentException("Invalid IdOrganization");
            }
            _organizationService.Update(item);
            return item;
        }

        [HttpGet]
        public void Delete(Guid id)
        {
            _organizationService.Delete(id);
        }
    }
}
