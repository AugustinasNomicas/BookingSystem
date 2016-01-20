using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using AutoMapper;
using Microsoft.Data.Entity;
using Tourtlee.BookingSystem.Business.Dto.Bookings;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model.Requests.Bookings;

namespace Tourtlee.BookingSystem.Business.Operations.Bookings
{
    public class GetBookingsListOperation : OperationBase<BookingsFilter, BookingsListDto>
    {
        private readonly IBookingRepository _bookingRepository;

        public GetBookingsListOperation(IOperationContext operationContext, IBookingRepository bookingRepository) : base(operationContext)
        {
            _bookingRepository = bookingRepository;
        }

        protected override BookingsListDto OnOperate(BookingsFilter request)
        {
            var q = _bookingRepository.GetAll().Include(b => b.Tour)
                .Where(b => b.Tour.IdOrganization == OperationContext.IdOrganization);

            if (request.IdTour.HasValue)
            {
                q = q.Where(b => b.IdTour == request.IdTour.Value);
            }

            if (!string.IsNullOrWhiteSpace(request.Text))
            {
                q = q.Where(s => Regex.Split(request.Text, @"\W").Any(w => s.Firstname.Contains(w)));
            }

            if (request.IdBookingSet.HasValue)
            {
                q = q.Where(b => b.IdBookingSet == request.IdBookingSet.Value);
            }

            var count = q.Count();

            // apply paging
            q = q.Skip((request.CurrentPage - 1) * request.PageSize).Take(request.PageSize);

            var result = q.ToList();

            return new BookingsListDto
            {
                Bookings = Mapper.Map<List<BookingDto>>(result),
                CurrentPage = request.CurrentPage,
                PageSize = request.PageSize,
                Total = count
            };
        }

    }
}
