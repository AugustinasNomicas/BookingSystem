using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class UpdateTourOperation : OperationBase<TourDto>
    {
        private readonly ITourRepository _tourRepository;

        public UpdateTourOperation(ITourRepository tourRepository)
        {
            _tourRepository = tourRepository;
        }

        public override void Operate(TourDto request)
        {
            var tour = Mapper.Map<Tour>(request);
            _tourRepository.Update(tour);
            _tourRepository.Save();
        }
    }
}
