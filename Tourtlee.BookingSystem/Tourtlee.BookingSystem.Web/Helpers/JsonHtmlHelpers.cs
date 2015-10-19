using Microsoft.AspNet.Html.Abstractions;
using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.AspNet.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tourtlee.BookingSystem.Web.Utilities;

namespace Tourtlee.BookingSystem.Web.Helpers
{
    public static class JsonHtmlHelpers
    {
        public static IHtmlContent JsonFor<T>(this IHtmlHelper helper, T obj)
        {
            return helper.Raw(obj.ToJson());
        }
    }
}
