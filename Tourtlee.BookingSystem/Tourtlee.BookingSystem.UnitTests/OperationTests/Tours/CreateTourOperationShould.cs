using NSubstitute;
using Tourtlee.BookingSystem.Business.Operations.Tours;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Tourtlee.BookingSystem.Model;
using Xunit;
using Tourtlee.BookingSystem.Business.Dto.Tours;

namespace Tourtlee.BookingSystem.UnitTests.OperationTests.Tours
{
    public class CreateTourOperationShould : OperationBaseTest
    {
        private readonly ITourRepository _tourRepository;

        public CreateTourOperationShould()
        {
            _tourRepository = Substitute.For<ITourRepository>();
        }

        [Fact]
        public void CreateNewTour()
        {
            var cmd = new CreateTourOperation(_tourRepository);
            cmd.Operate(new CreateTourDto
            {
                Name = "Test org"
            });

            _tourRepository.Received().Create(Arg.Any<Tour>());
            _tourRepository.Received().Save();
        }
    }
}
