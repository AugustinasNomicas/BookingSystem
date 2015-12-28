using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class GetTourSelectorItemsOperation : OperationBase<object, List<TourSelectorItemDto>>
    {
        private readonly ITourRepository _tourRepository;
        public GetTourSelectorItemsOperation(IOperationContext operationContext, ITourRepository tourRepository) : base(operationContext)
        {
            _tourRepository = tourRepository;
        }

        protected override List<TourSelectorItemDto> OnOperate(object request)
        {
            var idOrganization = OperationContext.IdOrganization;

            return _tourRepository.FindBy(t => t.IdOrganization == idOrganization).Select(t => new TourSelectorItemDto
            {
                IdTour = t.IdTour,
                Name = t.Name
            }).ToList();
        }
    }
}
