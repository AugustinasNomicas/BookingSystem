/// <reference path="../../../../typings/tsd.d.ts" />
var tours_resource_1 = require("./tours.resource");
var tours_edit_controller_1 = require("./tours.edit.controller");
var angularModuleFactory_1 = require("../../shared/services/angularModuleFactory");
var formGroupValidation_directive_1 = require("../../shared/directives/formGroupValidation/formGroupValidation.directive");
var Tours;
(function (Tours) {
    "use strict";
    var moduleName = "tours";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("formGroupValidation", formGroupValidation_directive_1.FormGroupValidationDirective.factory());
    app.controller("ToursEditController", tours_edit_controller_1.ToursEditController);
    app.service("ToursResource", tours_resource_1.ToursResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Tours = exports.Tours || (exports.Tours = {}));
