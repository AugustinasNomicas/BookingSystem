using System;
using System.Collections.Generic;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Web.Infastructure;

namespace Tourtlee.BookingSystem.Web.Areas.Manage.Controllers
{
    [Authorize]
    [Area("Manage")]
    public class ToursApiController : Controller, ICrudApiController<TourDto>
    {
        private readonly ITourService _tourService;

        public ToursApiController(ITourService tourService)
        {
            _tourService = tourService;
        }

        [HttpPost]
        public TourDto Create(TourDto item)
        {
            if (item == null)
            {
                throw new ArgumentException("Invalid Tour");
            }

            _tourService.Create(item);

            return item;
        }

        public IEnumerable<TourDto> Index()
        {
            return _tourService.GetList();
        }

        public TourDto Get(Guid id)
        {
            return _tourService.Get(id);
        }

        [HttpPut]
        public TourDto Update([FromBody] TourDto item)
        {
            _tourService.Update(item);
            return item;
        }

        [HttpGet]
        public void Delete(Guid id)
        {
            _tourService.Delete(id);
        }

        [HttpGet]
        public List<TourSelectorItemDto> GetTourSelectorItems()
        {
            return _tourService.GetTourSelectorItems();
        }
    }
}
