using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Services;


namespace Tourtlee.BookingSystem.Web.ApiControllers.Admin
{
    [Route("api/[controller]")]
    public class OrganizationsController : Controller
    {
        private readonly IOrganizationService _organizationService;

        public OrganizationsController(IOrganizationService organizationService)
        {
            _organizationService = organizationService;
        }

        [HttpGet]
        public IEnumerable<OrganizationDto> Get()
        {
            return _organizationService.GetOrganizationList();
        }
    }
}
