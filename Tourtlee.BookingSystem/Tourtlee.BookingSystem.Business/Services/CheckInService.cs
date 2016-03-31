using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Business.Dto.Checkin;
using Tourtlee.BookingSystem.Business.Operations.Checkin;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.Model.Requests.Checkin;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface ICheckinService
    {
        CheckinResult Checkin(CheckinRequest request);
        void CancelCheckin(Guid idBooking);
        CheckinInitialValuesDto GetCheckinInitialValues();
        List<DateTime> GetDatesForTour(Guid idTour);
        CheckinProgressDto GetCheckinProgressOperation(CheckinProgressRequest request);
    }

    public class CheckinService : ServiceBase, ICheckinService
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

        public void CancelCheckin(Guid idBooking)
        {
            var operation = _serviceProvider.GetRequiredService<CancelCheckinOperation>();
            operation.Operate(idBooking);
        }

        public CheckinInitialValuesDto GetCheckinInitialValues()
        {
            var operation = _serviceProvider.GetRequiredService<GetCheckinInitialValuesOperation>();
            return operation.Operate(null);
        }

        public List<DateTime> GetDatesForTour(Guid idTour)
        {
            var operation = _serviceProvider.GetRequiredService<GetDatesForTourOperation>();
            return operation.Operate(idTour);
        }

        public CheckinProgressDto GetCheckinProgressOperation(CheckinProgressRequest request)
        {
            var operation = _serviceProvider.GetRequiredService<GetCheckinProgressOperation>();
            return operation.Operate(request);
        }
    }
}
