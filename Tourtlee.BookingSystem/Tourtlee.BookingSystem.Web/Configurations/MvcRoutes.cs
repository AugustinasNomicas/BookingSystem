using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting.Startup;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Routing;

namespace Tourtlee.BookingSystem.Web.Configurations
{
    public static class MvcRoutes
    {
        public static void Configure(IRouteBuilder routes)
        {
            routes.MapRoute(
            name: "default",
            template: "{controller}/{*.}",
            defaults: new { controller = "Home", action = "Index" });
        }
    }
}
