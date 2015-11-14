using System;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class CreateTourOperation : OperationBase<CreateTourDto>
    {
        private readonly ITourRepository _tourRepository;
        public CreateTourOperation(ITourRepository tourRepository)
        {
            _tourRepository = tourRepository;
        }

        public new void Operate(CreateTourDto createTourDto)
        {
            var tour = new Tour()
            {
                IdTour = Guid.NewGuid(),
                Name = createTourDto.Name,
                Description = createTourDto.Description,
                DescriptionShort = createTourDto.DescriptionShort,
                Availabilities = createTourDto.Availabilities
            };

            _tourRepository.Create(tour);

            _tourRepository.Save();
        }

    }
}
