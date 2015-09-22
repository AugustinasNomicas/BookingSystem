using System;
using System.Collections.Generic;
using Microsoft.Framework.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Operations.Organizations;
using Tourtlee.BookingSystem.Core;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface IOrganizationService : ICrudService<OrganizationDto>
    {

    }

    public class OrganizationService : ServiceBase, IOrganizationService
    {
        private readonly IServiceProvider _serviceProvider;
        public OrganizationService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public void Create(OrganizationDto item)
        {
            var operation = _serviceProvider.GetRequiredService<CreateOrganizationOperation>();
            operation.Operate(item);
        }

        public void Delete(Guid id)
        {
            var operation = _serviceProvider.GetRequiredService<DeleteOrganizationOperation>();
            operation.Operate(id);
        }

        public OrganizationDto Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<OrganizationDto> GetList()
        {
            var operation = _serviceProvider.GetRequiredService<GetOrganizationListOperation>();
            return operation.Operate(null);

        }

        public void Update(OrganizationDto item)
        {
            var operation = _serviceProvider.GetRequiredService<UpdateOrganizationOperation>();
            operation.Operate(item);
        }
    }
}
