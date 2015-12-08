using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class GetTourOperation : OperationBase<Guid?, TourDto>
    {
        private readonly ITourRepository _tourRepository;

        public GetTourOperation(IOperationContext operationContext,
            ITourRepository tourRepository) : base(operationContext)
        {
            _tourRepository = tourRepository;
        }

        protected override TourDto OnOperate(Guid? idTour)
        {
            var tourEntity = idTour.HasValue ? 
                _tourRepository.FindBy(t => t.IdTour == idTour.Value).FirstOrDefault()
                : _tourRepository.GetDefault();

            var tour = Mapper.Map<TourDto>(tourEntity);
            return tour;
        }
    }
}
