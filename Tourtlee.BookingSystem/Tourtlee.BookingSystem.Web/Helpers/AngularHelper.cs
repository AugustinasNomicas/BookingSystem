using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.AspNet.Mvc.ViewFeatures;

namespace Tourtlee.BookingSystem.Web.Helpers
{
	public static class AngularHelperExtension
	{
		public static AngularHelper<TModel> Angular<TModel>(this IHtmlHelper<TModel> helper)
		{
			return new AngularHelper<TModel>(helper);
		}
	}

	public class AngularHelper<TModel>
	{
		private readonly IHtmlHelper<TModel> _htmlHelper;

		public AngularHelper(IHtmlHelper<TModel> helper)
		{
			_htmlHelper = helper;
		}

		public AngularModelHelper<TModel> ModelFor(string expressionPrefix, string angularFormName)
		{
			return new AngularModelHelper<TModel>(_htmlHelper, expressionPrefix, angularFormName);
		}
	}
}