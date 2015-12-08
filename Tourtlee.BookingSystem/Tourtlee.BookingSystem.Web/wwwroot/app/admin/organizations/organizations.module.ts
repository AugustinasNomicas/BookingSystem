/// <reference path="../../../../typings/tsd.d.ts" />

import vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");

import {OrganizationsController} from "./organizations.controller";
import {OrganizationsResource} from "./organizations.resource";
import {AngularModuleFactory} from "../../shared/services/angularModuleFactory";

export module Organizations {
    "use strict";
    var moduleName = "organizations";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());        

    app.controller("OrganizationsController", OrganizationsController);
    app.service("OrganizationsResource", OrganizationsResource);
    
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}