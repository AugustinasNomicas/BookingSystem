using Microsoft.Extensions.DependencyInjection;
using Tourtlee.BookingSystem.DataAccess.Repositories;
using Scrutor;

namespace Tourtlee.BookingSystem.DataAccess
{
    public static class IocRegistrations
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.Scan(scan => scan
                .FromAssemblyOf<IRepositoryBase>()
                    .AddClasses(classes => classes.AssignableTo<IRepositoryBase>())
                        .AsImplementedInterfaces()
                        .WithScopedLifetime());
        }
    }
}
