using System;
using Microsoft.AspNet.Mvc.ViewFeatures;
using Microsoft.AspNet.Mvc.Rendering;

namespace Tourtlee.BookingSystem.Web.Helpers
{
	public class AngularNgRepeatHelper<TModel> : AngularModelHelper<TModel>, IDisposable
	{
		public AngularNgRepeatHelper(HtmlHelper helper,
			string variableName, string propertyExpression)
			: base(helper, variableName)
		{
			var div = new TagBuilder("div");
			div.MergeAttribute("ng-repeat",
				string.Format("{0} in {1}", variableName, propertyExpression));
			
			Helper.ViewContext.Writer.Write(div.ToString());
		}

		void IDisposable.Dispose()
		{
			Helper.ViewContext.Writer.Write("</div>");
		}
	}
}