using System;
using System.Collections.Generic;
using Microsoft.Framework.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Core;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IOrganizationService
    {
        void AddOrganization(string name);
        List<OrganizationDto> GetOrganizationList();
        void UpdateOrganization(OrganizationDto organization);
    }

    public class OrganizationService : ServiceBase, IOrganizationService
    {
        private readonly IServiceProvider _serviceProvider;
        public OrganizationService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public void AddOrganization(string name)
        {
            var operation = _serviceProvider.GetRequiredService<CreateOrganizationOperation>();
            operation.Operate(name);
        }

        public List<OrganizationDto> GetOrganizationList()
        {
            var operation = _serviceProvider.GetRequiredService<GetOrganizationListOperation>();
            return operation.Operate(null);
        }

        public void UpdateOrganization(OrganizationDto organization)
        {
            var operation = _serviceProvider.GetRequiredService<UpdateOrganizationOperation>();
            operation.Operate(organization);

        }
    }
}
