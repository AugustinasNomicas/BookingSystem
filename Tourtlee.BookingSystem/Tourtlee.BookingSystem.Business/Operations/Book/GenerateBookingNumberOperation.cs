using System;
using Tourtlee.BookingSystem.Business.Operations.Core;

namespace Tourtlee.BookingSystem.Business.Operations.Book
{
    public class GenerateBookingNumberOperation : OperationBase<object, string>
    {
        Random R = new Random();

        public GenerateBookingNumberOperation(IOperationContext operationContext) : base(operationContext)
        {
        }

        protected override string OnOperate(object request)
        {
            return "B" + ((long)R.Next(0, 100000) * (long)R.Next(0, 100000)).ToString().PadLeft(10, '0');
        }
    }
}
