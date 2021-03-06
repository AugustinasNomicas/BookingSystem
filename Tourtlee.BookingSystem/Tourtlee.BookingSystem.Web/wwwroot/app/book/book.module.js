/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var angularModuleFactory_1 = require("../shared/services/angularModuleFactory");
var formGroupValidation_directive_1 = require("../shared/directives/formGroupValidation/formGroupValidation.directive");
var book_controller_1 = require("./book.controller");
var book_resource_1 = require("./book.resource");
var TourSelector_directive_1 = require("../shared/directives/tourSelector/TourSelector.directive");
var tours_resource_1 = require("../manage/tours/tours.resource");
var Book;
(function (Book) {
    "use strict";
    var moduleName = "book";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("formGroupValidation", formGroupValidation_directive_1.FormGroupValidationDirective.factory());
    app.directive("tourSelectorDirective", TourSelector_directive_1.TourSelectorDirective.factory());
    app.controller("BookController", book_controller_1.BookController);
    app.service("BookResource", book_resource_1.BookResource);
    app.service("ToursResource", tours_resource_1.ToursResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Book = exports.Book || (exports.Book = {}));
