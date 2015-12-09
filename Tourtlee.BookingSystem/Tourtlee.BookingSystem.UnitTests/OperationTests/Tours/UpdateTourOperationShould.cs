using System;
using NSubstitute;
using Tourtlee.BookingSystem.Business.Operations.Tours;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Xunit;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Core;
using Tourtlee.BookingSystem.Model.Security;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Tours
{
    public class UpdateTourOperationShould : OperationBaseTest
    {
        private readonly ITourRepository _tourRepository;
        private readonly IOperationContext _operationContext;

        private readonly Guid _idOrganization = Guid.NewGuid();

        public UpdateTourOperationShould()
        {
            _tourRepository = Substitute.For<ITourRepository>();
            _operationContext = Substitute.For<IOperationContext>();
            _operationContext.IdOrganization.Returns(_idOrganization);
        }

        [Fact]
        public void CreateNewTourIfIdTourIsEmpty()
        {
            var cmd = new UpdateTourOperation(_operationContext, _tourRepository);
            cmd.Operate(new TourDto
            {
                IdTour = Guid.Empty,
                Name = "Test org"
            });

            _tourRepository.Received().Create(Arg.Is<Tour>(tour => tour.IdOrganization == _idOrganization));
            _tourRepository.Received().Save();
        }

        [Fact]
        public void UpdateTour()
        {
            var cmd = new UpdateTourOperation(_operationContext, _tourRepository);
            cmd.Operate(new TourDto
            {
                IdTour = Guid.NewGuid(),
                Name = "Test org"
            });

            _tourRepository.Received().Update(Arg.Any<Tour>());
            _tourRepository.Received().Save();
        }
    }
}
