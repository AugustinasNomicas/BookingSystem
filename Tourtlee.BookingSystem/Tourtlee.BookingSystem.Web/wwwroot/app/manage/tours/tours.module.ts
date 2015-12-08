/// <reference path="../../../../typings/tsd.d.ts" />

import vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");

import formGroupValidationDirective = require("../../shared/directives/formgroupvalidation/formgroupvalidation.directive");

import {ToursResource} from "./tours.resource";
import {ToursEditController} from "./tours.edit.controller";
import {AngularModuleFactory} from "../../shared/services/angularModuleFactory";

export module Tours {
    "use strict";
    var moduleName = "tours";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("vCrudGrid", vCrudGrid.factory());
    app.directive("vCellEditor", vCellEditor.factory());

    app.directive("formGroupValidation", formGroupValidationDirective.factory());

    app.controller("ToursEditController", ToursEditController);
    app.service("ToursResource", ToursResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}