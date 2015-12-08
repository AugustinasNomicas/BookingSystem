using System;
using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class UpdateTourOperation : OperationBase<TourDto, TourDto>
    {
        private readonly ITourRepository _tourRepository;

        public UpdateTourOperation(IOperationContext operationContext,
            ITourRepository tourRepository) : base(operationContext)
        {
            _tourRepository = tourRepository;
        }

        protected override TourDto OnOperate(TourDto request)
        {
            var tour = Mapper.Map<Tour>(request);
            if (tour.IdTour != Guid.Empty)
            {
                _tourRepository.Update(tour);
            }
            else
            {
                tour.IdTour = Guid.NewGuid();
                _tourRepository.Create(tour);
            }
            _tourRepository.Save();

            return Mapper.Map<TourDto>(tour);
        }
    }
}
