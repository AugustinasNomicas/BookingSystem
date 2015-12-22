using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Routing;

namespace Tourtlee.BookingSystem.Web.Configurations
{
    public static class MvcRoutes
    {
        public static void Configure(IRouteBuilder routes)
        {
            routes.MapRoute(name: "areaRoute",
                 template: "{area:exists}/{controller}/{action?}/{id?}",
                 defaults: new { controller = "Home", action = "Index" });

            routes.MapRoute(
            name: "account",
            template: "Account/{action}/",
            defaults: new { controller = "Account" });

            routes.MapRoute(
            name: "templates",
            template: "Templates/{action}/",
            defaults: new { controller = "Templates" });

            routes.MapRoute(
            name: "defaultWithAction",
            template: "{controller}/{action?}",
            defaults: new { controller = "Home", action = "Index" });

            routes.MapRoute(
            name: "default",
            template: "{controller}/{*.}",
            defaults: new { controller = "Home", action = "Index" });
        }
    }
}
