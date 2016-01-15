using System;
using System.Linq;
using Tourtlee.BookingSystem.Business.Dto.Checkin;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Services;

namespace Tourtlee.BookingSystem.Business.Operations.Checkin
{
    public class GetCheckinInitialValuesOperation : OperationBase<object, CheckinInitialValuesDto>
    {
        private readonly IBookService _bookService;

        public GetCheckinInitialValuesOperation(IOperationContext operationContext, IBookService bookService) : base(operationContext)
        {
            _bookService = bookService;
        }

        protected override CheckinInitialValuesDto OnOperate(object request)
        {
            var infoForNewBooking = _bookService.GetInfoForNewBooking(null);
            var datesList = infoForNewBooking.DatesList.Where(d => d.DateTime >= DateTime.Now.AddHours(-1)).Select(d => d.DateTime).ToList();
            var date = datesList.First();

            var result = new CheckinInitialValuesDto
            {
                IdTour = infoForNewBooking.IdTour,
                Date = date,
                DatesList = datesList.ToList()
            };

            return result;
        }
    }
}
