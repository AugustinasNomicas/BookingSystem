using AutoMapperFramework;
using System;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Dto
{
    public class OrganizationDto : IMapFrom<Organization>, IMapTo<Organization>
    {
        public Guid IdOrganization { get; set; }
        public string Name { get; set; }
    }
}
