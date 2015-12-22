/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var angularModuleFactory_1 = require("../shared/services/angularModuleFactory");
var formGroupValidation_directive_1 = require("../shared/directives/formGroupValidation/formGroupValidation.directive");
var book_controller_1 = require("./book.controller");
var book_resource_1 = require("./book.resource");
var Book;
(function (Book) {
    "use strict";
    var moduleName = "book";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("formGroupValidation", formGroupValidation_directive_1.FormGroupValidationDirective.factory());
    app.controller("BookController", book_controller_1.BookController);
    app.service("BookResource", book_resource_1.BookResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Book = exports.Book || (exports.Book = {}));
