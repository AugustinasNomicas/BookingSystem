using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.DataAccess
{
    // Class is needed for workaround #2357
    // https://github.com/aspnet/EntityFramework/issues/2357
    public class Startup
    {
        public void Configure() { }
    }
}
