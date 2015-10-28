using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.AspNet.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Tourtlee.BookingSystem.Web.Utilities;
using Microsoft.AspNet.Mvc.ModelBinding;
using Microsoft.AspNet.Html.Abstractions;
using Microsoft.AspNet.Mvc;

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
        /// Converts a lambda expression into a camel-cased AngularJS model property, ie:
        /// vm.model.parentProperty.childProperty
        /// </summary>
        public IHtmlContent PropertyFor<TProp>(Expression<Func<TModel, TProp>> property)
        {
            return Helper.Raw(ExpressionForInternal(property));
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

        public IHtmlContent FormGroupFor<TProp>(Expression<Func<TModel, TProp>> property)
        {
            //Turns x => x.SomeName into "SomeName"
            var name = ExpressionHelper.GetExpressionText(property);
            var metadata = Helper.MetadataProvider.GetMetadataForProperty(typeof(TModel), name);
            name = name.ToCamelCase();

            //Turns x => x.SomeName into vm.model.someName
            var expression = ExpressionForInternal(property);

            //Creates <div class="form-group has-feedback"
            //				form-group-validation="name">
            var formGroup = new TagBuilder("div");
            formGroup.AddCssClass("form-group");
            formGroup.AddCssClass("has-feedback");
            formGroup.MergeAttribute("form-group-validation", name);

            var labelText = metadata.DisplayName ?? string.Format("{0}.{1}", typeof(TModel).Name.ToCamelCase(), name);//.Humanize(LetterCasing.Title);

            //Creates <label class="control-label" for="Name">Name</label>
            var label = new TagBuilder("label");
            label.AddCssClass("control-label");
            label.AddCssClass("col-md-4");
            label.MergeAttribute("for", name);
            label.MergeAttribute("data-translate", "");
            label.InnerHtml.AppendEncoded(labelText);

            var tagName = metadata.DataTypeName == "MultilineText"
                ? "textarea"
                : "input";

            var placeholder = metadata.NullDisplayText ??
                              (labelText + "...");

            //Creates <input ng-model="expression"
            //		   class="form-control" name="name" type="text" >
            var input = new TagBuilder(tagName);
            input.AddCssClass("form-control");
            input.MergeAttribute("ng-model", expression);
            input.MergeAttribute("name", name);
            input.MergeAttribute("type", "text");

            ApplyValidationToInput(input, metadata, expression);

            var divForInput = new TagBuilder("div");
            divForInput.AddCssClass("col-md-4");
            divForInput.InnerHtml.Append(input);

            formGroup.InnerHtml
                .Append(label)
                .Append(divForInput);
            
            return formGroup;
        }

        private void ApplyValidationToInput(TagBuilder input, ModelMetadata metadata, string ngModelExpression)
        {
            if (metadata.IsRequired)
                input.MergeAttribute("required", "");

            if (metadata.DataTypeName == "EmailAddress")
                input.Attributes["type"] = "email";

            if (metadata.DataTypeName == "PasswordRepeat")
            {
                input.MergeAttribute("ui-validate", "'$value==" + ngModelExpression + "'"); // how to decode ' symbols??
                input.MergeAttribute("ui-validate-watch", string.Format("'{0}'", ngModelExpression));
            }

            if (metadata.DataTypeName == "PhoneNumber")
                input.MergeAttribute("pattern", @"[\ 0-9()-]+");
        }
    }
}