using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Tourtlee.BookingSystem.Business;
using Xunit;

namespace Tourtlee.BookingSystem.UnitTests
{
    public class AutoMapperTests
    {
        [Fact]
        public void IsValid()
        {
            AutoMapperConfiguration.Configure();
            Mapper.AssertConfigurationIsValid();
        }
    }
}
