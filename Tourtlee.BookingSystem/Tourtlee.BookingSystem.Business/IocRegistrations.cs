﻿using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Business.Operations.Schedule;
using Tourtlee.BookingSystem.Business.Operations.Tours;
using Tourtlee.BookingSystem.Business.Operations.Users;
using Tourtlee.BookingSystem.Business.Services;

namespace Tourtlee.BookingSystem.Business
{
    public static class IocRegistrations
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // Register operation context
            services.AddScoped<IOperationContext, OperationContext>();

            // Create services
            services.AddScoped<IOrganizationService, OrganizationService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ITourService, TourService>();
            services.AddScoped<IScheduleService, ScheduleService>();


            // Create operations
            services.AddTransient<CreateOrganizationOperation>();
            services.AddTransient<GetOrganizationListOperation>();
            services.AddTransient<GetTourOperation>();
            services.AddTransient<DeleteOrganizationOperation>();
            services.AddTransient<UpdateOrganizationOperation>();

            //Tour operations
            services.AddTransient<UpdateTourOperation>();
            services.AddTransient<DeleteTourOperation>();
            services.AddTransient<GetTourListOperation>();

            // Schedule operations
            services.AddTransient<GetScheduleForTourOperation>();
            services.AddTransient<UpdateScheduleForTourOperation>();

            // User operations
            services.AddTransient<GetUserListOperation>();
            services.AddTransient<CreateUserOperation>();
        }
    }
}
