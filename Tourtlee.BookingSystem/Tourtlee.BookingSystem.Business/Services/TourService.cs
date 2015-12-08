using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Tours;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Core;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface ITourService : ICrudService<TourDto>
    {
        TourDto GetDefault();
    }

    public class TourService: ServiceBase, ITourService
    {
        private readonly IServiceProvider _serviceProvider;

        public TourService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public void Create(TourDto tourDto)
        {
            var operation = _serviceProvider.GetRequiredService<CreateTourOperation>();
            operation.Operate(tourDto);
        }

        public IEnumerable<TourDto> GetList()
        {
            var operation = _serviceProvider.GetRequiredService<GetTourListOperation>();
            return operation.Operate(null);
        }

        public TourDto Get(Guid id)
        {
            var operation = _serviceProvider.GetRequiredService<GetTourOperation>();
            return operation.Operate(id);
        }

        public TourDto GetDefault()
        {
            var operation = _serviceProvider.GetRequiredService<GetTourOperation>();
            return operation.Operate(null);
        }

        public TourDto Update(TourDto item)
        {
            var operation = _serviceProvider.GetRequiredService<UpdateTourOperation>();
            return operation.Operate(item);
        }

        public void Delete(Guid id)
        {
            var operation = _serviceProvider.GetRequiredService<DeleteTourOperation>();
            operation.Operate(id);
        }
    }
}
