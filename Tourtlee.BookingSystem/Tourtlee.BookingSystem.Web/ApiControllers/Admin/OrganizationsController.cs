using System;
using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Web.Infastructure;

namespace Tourtlee.BookingSystem.Web.ApiControllers.Admin
{
    [Route("api/admin/[controller]")]
    public class OrganizationsController : Controller, ICrudController<OrganizationDto>
    {
        private readonly IOrganizationService _organizationService;

        public OrganizationsController(IOrganizationService organizationService)
        {
            _organizationService = organizationService;
        }

        [HttpGet("Show")]
        public string Show()
        {
            return "Example";
        }

        [HttpGet("{id}")]
        public OrganizationDto Get(Guid id)
        {
            return _organizationService.Get(id);
        }

        [HttpGet]
        public IEnumerable<OrganizationDto> GetList()
        {
            return _organizationService.GetList();
        }

        [HttpPost]
        public OrganizationDto Post([FromBody] OrganizationDto item)
        {
            if (item == null)
            {
                throw new ArgumentException("Invalid Organization");
            }

            _organizationService.Create(item);
            return item;
        }

        [HttpPut]
        public OrganizationDto Put([FromBody] OrganizationDto item)
        {
            if (item.IdOrganization == Guid.Empty)
            {
                throw new ArgumentException("Invalid IdOrganization");
            }
            _organizationService.Update(item);
            return item;
        }

        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            _organizationService.Delete(id);
        }
    }
}
