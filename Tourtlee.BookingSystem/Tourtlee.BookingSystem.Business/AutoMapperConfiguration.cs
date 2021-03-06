﻿using System;
using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto.Accounts;
using Tourtlee.BookingSystem.Model.Security;
using AutoMapperFramework;
using System.Reflection;
using Tourtlee.BookingSystem.Business.Dto.Bookings;
using Tourtlee.BookingSystem.Model.Book;

namespace Tourtlee.BookingSystem.Business
{
    public static class AutoMapperConfiguration
    {
        public static void Configure()
        {
            var mapLoader = new MapLoader(Mapper.Configuration);
            mapLoader.LoadMappings(typeof(AutoMapperConfiguration).GetTypeInfo().Assembly
                                    .GetExportedTypes());

            Mapper.CreateMap<ApplicationUser, UserListItemDto>()
                .ForMember(dest => dest.IdUser, opt => opt.MapFrom(src => Guid.Parse(src.Id)))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.UserName))
                .ForMember(dest => dest.OrganizationName, opt => opt.MapFrom(src => src.Organization.Name));

            Mapper.CreateMap<Booking, BookingDto>()
                .ForMember(dest => dest.TourName, o => o.MapFrom(src => src.Tour.Name));
        }
    }
}
