﻿using System;
using Microsoft.Extensions.Logging;

namespace Tourtlee.BookingSystem.DataAccess
{
    public class DbConsoleLogger : ILogger
    {
        public void Log(LogLevel logLevel, int eventId, object state, Exception exception,
            Func<object, Exception, string> formatter)
        {
            var message = $"{Environment.NewLine}{formatter(state, exception)}";
            Console.WriteLine(message);
#if DEBUG
            System.Diagnostics.Debug.WriteLine(message);
#endif
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
        }

        public IDisposable BeginScopeImpl(object state)
        {
            return null;
        }
    }
}