using System;
using System.Linq;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class DeleteTourOperation : OperationBase<Guid>
    {
        private readonly ITourRepository _tourRepository;

        public DeleteTourOperation(IOperationContext operationContext,
            ITourRepository tourRepository) : base(operationContext)
        {
            _tourRepository = tourRepository;

        }

        protected override void OnOperate(Guid request)
        {
            var tour = _tourRepository.FindBy(o => o.IdTour == request).Single();
            _tourRepository.Delete(tour);
            _tourRepository.Save();
        }
    }
}
