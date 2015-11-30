/// <reference path="../../../../typings/tsd.d.ts" />

import vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");

import formGroupValidationDirective = require("../../shared/directives/formgroupvalidation/formgroupvalidation.directive");

import angulaModuleFactory = require("../../shared/services/angularmodulefactory");

import toursController = require("./tours.controller");
import toursEditController = require("./tours.edit.controller");
import toursResource = require("./tours.resource");

export module Tours {
    "use strict";
    var moduleName = "tours";
    var translationsPart = "admin";

    var app = angulaModuleFactory.factory(moduleName, translationsPart);

    app.directive("vCrudGrid", vCrudGrid.factory());
    app.directive("vCellEditor", vCellEditor.factory());

    app.directive("formGroupValidation", formGroupValidationDirective.factory());

    app.controller("ToursController", toursController);
    app.controller("ToursEditController", toursEditController);
    app.service("ToursResource", toursResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}