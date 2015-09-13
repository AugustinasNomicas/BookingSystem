using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business
{
    public static class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.CreateMap<Organization, OrganizationDto>();
        }
    }
}
