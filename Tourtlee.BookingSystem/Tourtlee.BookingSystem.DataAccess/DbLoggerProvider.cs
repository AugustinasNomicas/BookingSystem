using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Framework.Logging;
using NuGet;
using ILogger = Microsoft.Framework.Logging.ILogger;

namespace Tourtlee.BookingSystem.DataAccess
{
    public class DbLoggerProvider : ILoggerProvider
    {

        public ILogger CreateLogger(string name)
        {
            return new DbConsoleLogger();

        }

        public void Dispose()
        {
        }
    }
}