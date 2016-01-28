using System.Linq;
using Tourtlee.BookingSystem.Business.Dto.Checkin;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Requests.Checkin;

namespace Tourtlee.BookingSystem.Business.Operations.Checkin
{
    public class GetCheckinProgressOperation : OperationBase<CheckinProgressRequest, CheckinProgressDto>
    {
        private readonly IBookingRepository _bookingRepository;

        public GetCheckinProgressOperation(IOperationContext operationContext, IBookingRepository bookingRepository) : base(operationContext)
        {
            _bookingRepository = bookingRepository;
        }

        protected override CheckinProgressDto OnOperate(CheckinProgressRequest request)
        {
            var result = new CheckinProgressDto
            {
                CheckedInCount = _bookingRepository.GetAll().Count(b => b.IdTour == request.IdTour
                                                                && b.TourDate == request.TourDate
                                                                && b.CheckedIn),
            };

            var totalCount = _bookingRepository.GetAll().Count(b => b.IdTour == request.IdTour
                                                                && b.TourDate == request.TourDate);

            result.CheckinLeftCount = totalCount - result.CheckedInCount;
            return result;
        }
    }
}
