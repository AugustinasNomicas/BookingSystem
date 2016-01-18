using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Tourtlee.BookingSystem.Model.Requests.UserSettings;

namespace Tourtlee.BookingSystem.Business.Operations.Tours
{
    public class GetTourOperation : OperationBase<Guid?, TourDto>
    {
        private readonly ITourRepository _tourRepository;
        private readonly IUserSettingsService _userSettingsService;

        public GetTourOperation(IOperationContext operationContext,
            ITourRepository tourRepository, IUserSettingsService userSettingsService) : base(operationContext)
        {
            _tourRepository = tourRepository;
            _userSettingsService = userSettingsService;
        }

        protected override TourDto OnOperate(Guid? idTour)
        {
            Tour tourEntity = null;
            if (!idTour.HasValue)
                tourEntity = GetDefaultTourFromSettings();

            if (tourEntity == null)
            {
                tourEntity = idTour.HasValue ?
                    _tourRepository.FindBy(t => t.IdTour == idTour.Value).FirstOrDefault()
                    : _tourRepository.FindBy(t => t.IdOrganization
                    == OperationContext.IdOrganization).FirstOrDefault();
            }

            var tour = Mapper.Map<TourDto>(tourEntity);
            return tour;
        }

        private Tour GetDefaultTourFromSettings()
        {
            var idTour = _userSettingsService.GetUserSetting(UserSettingNames.DefaultTour);
            if (string.IsNullOrWhiteSpace(idTour)) return null;

            var idTourGuid = Guid.Parse(idTour);
            return _tourRepository.FindBy(t => t.IdTour == idTourGuid).FirstOrDefault();
        }
    }
}
