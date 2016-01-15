using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Services;

namespace Tourtlee.BookingSystem.Business.Operations.Checkin
{
    public class GetDatesForTourOperation : OperationBase<Guid, List<DateTime>>
    {
        private readonly IBookService _bookService;

        public GetDatesForTourOperation(IOperationContext operationContext, IBookService bookService) : base(operationContext)
        {
            _bookService = bookService;
        }

        protected override List<DateTime> OnOperate(Guid idTour)
        {
            var infoForNewBooking = _bookService.GetInfoForNewBooking(idTour);
            var datesList = infoForNewBooking.DatesList.Where(d => d.DateTime >= DateTime.Now.AddHours(-1)).Select(d => d.DateTime).ToList();

            return datesList;
        }
    }
}
