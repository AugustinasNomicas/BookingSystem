﻿using Microsoft.AspNet.Html.Abstractions;
using Microsoft.AspNet.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Tourtlee.BookingSystem.Web.Utilities;

namespace Tourtlee.BookingSystem.Web.Helpers
{
	public class AngularModelHelper<TModel>
	{
		protected readonly IHtmlHelper Helper;
		private readonly string _expressionPrefix;

		public AngularModelHelper(IHtmlHelper helper, string expressionPrefix)
		{
			Helper = helper;
			_expressionPrefix = expressionPrefix;
		}

		/// <summary>
		/// Converts an lambda expression into a camel-cased string, prefixed
		/// with the helper's configured prefix expression, ie:
		/// vm.model.parentProperty.childProperty
		/// </summary>
		public IHtmlContent ExpressionFor<TProp>(Expression<Func<TModel, TProp>> property)
		{
			var expressionText = ExpressionForInternal(property);
			return Helper.Raw(expressionText);
		}

		/// <summary>
		/// Converts a lambda expression into a camel-cased AngularJS binding expression, ie:
		/// {{vm.model.parentProperty.childProperty}} 
		/// </summary>
		public IHtmlContent BindingFor<TProp>(Expression<Func<TModel, TProp>> property)
		{
			return Helper.Raw("{{" + ExpressionForInternal(property) + "}}");
		}

		/// <summary>
		/// Creates a div with an ng-repeat directive to enumerate the specified property,
		/// and returns a new helper you can use for strongly-typed bindings on the items
		/// in the enumerable property.
		/// </summary>
		public AngularNgRepeatHelper<TSubModel> Repeat<TSubModel>(
			Expression<Func<TModel, IEnumerable<TSubModel>>> property, string variableName)
		{
			var propertyExpression = ExpressionForInternal(property);
			return new AngularNgRepeatHelper<TSubModel>(
				Helper, variableName, propertyExpression);
		}
		
		private string ExpressionForInternal<TProp>(Expression<Func<TModel, TProp>> property)
		{
			var camelCaseName = property.ToCamelCaseName();

			var expression = !string.IsNullOrEmpty(_expressionPrefix)
				? _expressionPrefix + "." + camelCaseName
				: camelCaseName;

			return expression;
		}
	}
}