using System;
using System.Collections.Generic;
using System.Linq;
using NSubstitute;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Business.Operations.Tours;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Xunit;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Tours
{
    public class DeleteTourOperationShould : OperationBaseTest
    {
        private readonly ITourRepository _tourRepository;
        private readonly IOperationContext _operationContext;

        public DeleteTourOperationShould()
        {
            _tourRepository = Substitute.For<ITourRepository>();
            _operationContext = Substitute.For<IOperationContext>();
        }

        [Fact]
        public void DeleteTour()
        {
            var tourToDelete = new Tour
            {
                IdTour = new Guid("4fdb9f33-55b2-4a64-8a12-b68068b82e3f")
            };
            _tourRepository.FindBy(Arg.Any<System.Linq.Expressions.Expression<Func<Tour, bool>>>())
                .Returns((new List<Tour>() { tourToDelete }).AsQueryable());

            var cmd = new DeleteTourOperation(_operationContext,
                _tourRepository);
            cmd.Operate(tourToDelete.IdTour);

            _tourRepository.Received().Delete(tourToDelete);
            _tourRepository.Received().Save();
        }

    }
}
