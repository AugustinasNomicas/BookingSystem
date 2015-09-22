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
        public void Post([FromBody] OrganizationDto item)
        {
            _organizationService.Create(item);
        }

        [HttpPut]
        public void Put([FromBody] OrganizationDto item)
        {
            _organizationService.Update(item);
        }

        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            _organizationService.Delete(id);
        }
    }
}
