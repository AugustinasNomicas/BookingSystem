using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class GetTourListOperation : OperationBase<object, List<TourDto>>
    {
        private readonly ITourRepository _tourRepository;
        public GetTourListOperation(ITourRepository tourRepository)
        {
            _tourRepository = tourRepository;
        }

        public override List<TourDto> Operate(object request)
        {
            var tour = Mapper.Map<List<TourDto>>(_tourRepository.GetAll().ToList());
            return tour;
        }
    }
}
