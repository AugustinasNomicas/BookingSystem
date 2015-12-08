using NSubstitute;
using Tourtlee.BookingSystem.Business.Operations.Tours;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Xunit;
using Tourtlee.BookingSystem.Business.Dto.Tours;
using Tourtlee.BookingSystem.Business.Operations.Core;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Tours
{
    public class CreateTourOperationShould : OperationBaseTest
    {
        private readonly ITourRepository _tourRepository;
        private readonly IOperationContext _operationContext;

        public CreateTourOperationShould()
        {
            _tourRepository = Substitute.For<ITourRepository>();
            _operationContext = Substitute.For<IOperationContext>();
        }

        [Fact]
        public void CreateNewTour()
        {
            var cmd = new CreateTourOperation(_operationContext, _tourRepository);
            cmd.Operate(new TourDto
            {
                Name = "Test org"
            });

            _tourRepository.Received().Create(Arg.Any<Tour>());
            _tourRepository.Received().Save();
        }
    }
}
