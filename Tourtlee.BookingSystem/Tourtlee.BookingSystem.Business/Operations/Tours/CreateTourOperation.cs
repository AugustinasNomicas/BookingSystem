using System;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class CreateTourOperation : OperationBase<TourDto>
    {
        private readonly ITourRepository _tourRepository;
        public CreateTourOperation(IOperationContext operationContext,
            ITourRepository tourRepository) : base(operationContext)
        {
            _tourRepository = tourRepository;
        }

        protected override void OnOperate(TourDto editTourDto)
        {
            var tour = new Tour()
            {
                IdTour = Guid.NewGuid(),
                Name = editTourDto.Name,
                Description = editTourDto.Description,
                DescriptionShort = editTourDto.DescriptionShort,
                Availabilities = editTourDto.Availabilities
            };

            _tourRepository.Create(tour);

            _tourRepository.Save();
        }

    }
}
