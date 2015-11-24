using System;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class CreateTourOperation : OperationBase<TourDto>
    {
        private readonly ITourRepository _tourRepository;
        public CreateTourOperation(ITourRepository tourRepository)
        {
            _tourRepository = tourRepository;
        }

        public new void Operate(TourDto editTourDto)
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
