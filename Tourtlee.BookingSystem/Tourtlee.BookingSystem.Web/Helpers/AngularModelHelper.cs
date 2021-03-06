﻿using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.AspNet.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Tourtlee.BookingSystem.Web.Utilities;
using Microsoft.AspNet.Mvc.ModelBinding;
using Microsoft.AspNet.Html.Abstractions;
using Microsoft.AspNet.Mvc;
using System.IO;

namespace Tourtlee.BookingSystem.Web.Helpers
{
    public class AngularModelHelper<TModel>
    {
        protected readonly IHtmlHelper Helper;

        private readonly string _expressionPrefix;
        private readonly string _angularFormName;

        public AngularModelHelper(IHtmlHelper helper, string expressionPrefix)
        {
            Helper = helper;
            _expressionPrefix = expressionPrefix;
        }

        public AngularModelHelper(IHtmlHelper helper, string expressionPrefix, string angularFormName)
        {
            Helper = helper;
            _expressionPrefix = expressionPrefix;
            _angularFormName = angularFormName;
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
            formGroup.MergeAttribute("aria-describedby", string.Format("{0}-help", name));
            formGroup.MergeAttribute("form-group-validation", name);


            var labelText = metadata.DisplayName ?? string.Format("{0}.{1}", typeof(TModel).Name.ToCamelCase(), name);//.Humanize(LetterCasing.Title);

            //Creates <label class="control-label" for="Name">Name</label>
            var label = new TagBuilder("label");
            label.AddCssClass("control-label");
            label.AddCssClass("col-md-4");
            label.MergeAttribute("for", name);
            label.MergeAttribute("data-translate", "");
            label.InnerHtml.Append(labelText);

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

            ApplyValidationMessages(divForInput, name, _angularFormName);

            return formGroup;
        }

        private bool IsNumeric(ModelMetadata metadata)
        {
            return metadata.ModelType == typeof(int);
        }

        private void ApplyValidationToInput(TagBuilder input, ModelMetadata metadata, string ngModelExpression)
        {
            if (metadata.IsRequired)
                input.MergeAttribute("required", "");

            if (IsNumeric(metadata))
                input.Attributes["type"] = "number";

            if (metadata.DataTypeName == "EmailAddress")
                input.Attributes["type"] = "email";

            if (metadata.DataTypeName == "PhoneNumber")
                input.MergeAttribute("pattern", @"[\ 0-9()-]+");
        }

        private void ApplyValidationMessages(TagBuilder div, string propertyName, string angularFormName)
        {
            var validationSpan = new TagBuilder("span");
            validationSpan.MergeAttribute("ng-show", string.Format("{0}.$submitted || {0}.{1}.$touched", angularFormName, propertyName));

            var messagesSpan = new TagBuilder("span");
            messagesSpan.MergeAttribute("id", propertyName + "-help");
            messagesSpan.MergeAttribute("ng-hide", string.Format("{0}.{1}.$valid", angularFormName, propertyName));
            messagesSpan.AddCssClass("help-block");

            var ngMessages = new TagBuilder("ng-messages");
            ngMessages.MergeAttribute("for", string.Format("{0}.{1}.$error", angularFormName, propertyName));

            var ngIncludeMessages = new TagBuilder("ng-messages-include");
            ngIncludeMessages.MergeAttribute("src", "Templates/ValidationMessages");

            ngMessages.InnerHtml.Append(ngIncludeMessages);

            // icons
            var okIconSpan = new TagBuilder("span");
            okIconSpan.AddCssClass("glyphicon");
            okIconSpan.AddCssClass("glyphicon-ok");
            okIconSpan.AddCssClass("form-control-feedback");
            okIconSpan.MergeAttribute("ng-show", string.Format("{0}.{1}.$valid && {0}.{1}.$dirty", angularFormName, propertyName));
            div.InnerHtml.Append(okIconSpan);

            var removeIconSpan = new TagBuilder("span");
            removeIconSpan.AddCssClass("glyphicon");
            removeIconSpan.AddCssClass("glyphicon-remove");
            removeIconSpan.AddCssClass("form-control-feedback");
            removeIconSpan.MergeAttribute("ng-show", string.Format("!{0}.{1}.$valid && {0}.{1}.$dirty", angularFormName, propertyName));
            div.InnerHtml.Append(removeIconSpan);

            messagesSpan.InnerHtml.Append(ngMessages);
            validationSpan.InnerHtml.Append(messagesSpan);
            
            div.InnerHtml.Append(validationSpan);
        }
    }
}