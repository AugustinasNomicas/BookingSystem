using System;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Operations.Checkin;
using Tourtlee.BookingSystem.Model.Requests.Checkin;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface ICheckinService
    {
        CheckinResult Checkin(CheckinRequest request);
    }

    public class CheckinService : ICheckinService
    {
        private readonly IServiceProvider _serviceProvider;

        public CheckinService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public CheckinResult Checkin(CheckinRequest request)
        {
            var operation = _serviceProvider.GetRequiredService<CheckinOperation>();
            return operation.Operate(request);
        }
    }
}
