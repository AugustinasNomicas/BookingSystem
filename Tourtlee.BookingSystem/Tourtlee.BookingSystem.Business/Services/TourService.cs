using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Framework.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Tours;

namespace Tourtlee.BookingSystem.Business.Services
{
    public class TourService
    {
        private readonly IServiceProvider _serviceProvider;

        public TourService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public void Create(CreateTourDto createTourDto)
        {
            var operation = _serviceProvider.GetRequiredService<CreateTourOperation>();
            operation.Operate(createTourDto);
        }
    }
}
