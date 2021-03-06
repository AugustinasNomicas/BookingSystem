﻿using System;
using System.Collections.Generic;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Tours;
using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.Core;

namespace Tourtlee.BookingSystem.Business.Services
{
    public interface ITourService : ICrudService<TourDto>
    {
        TourDto GetDefault();
        List<TourSelectorItemDto> GetTourSelectorItems();
    }

    public class TourService: ServiceBase, ITourService
    {
        private readonly IServiceProvider _serviceProvider;

        public TourService(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public void Create(TourDto tourDto)
        {
            // UpdateTourOperation also creates new tour if IdTour is empty
            var operation = _serviceProvider.GetRequiredService<UpdateTourOperation>();
            operation.Operate(tourDto);
        }

        public IEnumerable<TourDto> GetList()
        {
            var operation = _serviceProvider.GetRequiredService<GetTourListOperation>();
            return operation.Operate(null);
        }

        public TourDto Get(Guid id)
        {
            var operation = _serviceProvider.GetRequiredService<GetTourOperation>();
            return operation.Operate(id);
        }

        public TourDto GetDefault()
        {
            var operation = _serviceProvider.GetRequiredService<GetTourOperation>();
            return operation.Operate(null);
        }

        public TourDto Update(TourDto item)
        {
            var operation = _serviceProvider.GetRequiredService<UpdateTourOperation>();
            return operation.Operate(item);
        }

        public void Delete(Guid id)
        {
            var operation = _serviceProvider.GetRequiredService<DeleteTourOperation>();
            operation.Operate(id);
        }

        public List<TourSelectorItemDto> GetTourSelectorItems()
        {
            var operation = _serviceProvider.GetRequiredService<GetTourSelectorItemsOperation>();
            return operation.Operate(null);
        }
    }
}
