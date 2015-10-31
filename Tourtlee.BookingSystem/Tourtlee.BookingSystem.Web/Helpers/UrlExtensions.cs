using Microsoft.AspNet.Html.Abstractions;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.AspNet.Mvc.Routing;
using Microsoft.AspNet.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;

namespace Tourtlee.BookingSystem.Web.Helpers
{
    public static class StrongUrlExtension
    {
        public static StrongUrl StrongUrl(this IHtmlHelper helper)
        {
            return new StrongUrl(helper);
        }
    }

    public class StrongUrl
    {
        protected readonly IHtmlHelper Helper;

        public StrongUrl(IHtmlHelper helper)
        {
            Helper = helper;
        }

        public IHtmlContent ActionLink<TController>
            (Expression<Action<TController>> expression,
            string linkText,
            object htmlAttributes)
            where TController : Controller
        {
            var actionMember = GetMethodInfoInternal(expression);
            var controllerType = actionMember.DeclaringType;
            var areaName = ExtractAreaFromController(controllerType);
            var actionName = actionMember.Name;

            return Helper.ActionLink(
                linkText, 
                actionName, 
                controllerType.FullName,
                new
                {
                    area = areaName
                }, 
                htmlAttributes);
        }

        private static MethodInfo GetMethodInfoInternal(dynamic expression)
        {
            var method = expression.Body as MethodCallExpression;
            if (method != null)
                return method.Method;

            throw new ArgumentException("Expression is incorrect!");
        }

        private static string ExtractAreaFromController(Type controllerType)
        {
            var parts = controllerType.Namespace.Split('.').ToList();
            var areaIndex = parts.IndexOf("Areas");
            return areaIndex > -1 ? parts[areaIndex + 1] : string.Empty;
        }

    }
}
