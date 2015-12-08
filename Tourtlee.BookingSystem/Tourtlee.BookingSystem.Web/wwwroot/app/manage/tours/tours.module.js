/// <reference path="../../../../typings/tsd.d.ts" />
var vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
var vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var formGroupValidationDirective = require("../../shared/directives/formgroupvalidation/formgroupvalidation.directive");
var angulaModuleFactory = require("../../shared/services/angularmodulefactory");
var toursEditController = require("./tours.edit.controller");
var tours_resource_1 = require("./tours.resource");
var Tours;
(function (Tours) {
    "use strict";
    var moduleName = "tours";
    var translationsPart = "admin";
    var app = angulaModuleFactory.factory(moduleName, translationsPart);
    app.directive("vCrudGrid", vCrudGrid.factory());
    app.directive("vCellEditor", vCellEditor.factory());
    app.directive("formGroupValidation", formGroupValidationDirective.factory());
    app.controller("ToursEditController", toursEditController);
    app.service("ToursResource", tours_resource_1.ToursResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Tours = exports.Tours || (exports.Tours = {}));
