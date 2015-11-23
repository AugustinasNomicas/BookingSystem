using Microsoft.Extensions.Logging;


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