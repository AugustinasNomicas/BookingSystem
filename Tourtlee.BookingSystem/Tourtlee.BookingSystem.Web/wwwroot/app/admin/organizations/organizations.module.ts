/// <reference path="../../../../typings/tsd.d.ts" />

import vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");

import angulaModuleFactory = require("../../shared/services/angularmodulefactory");

import organizationsController = require("./organizations.controller");
import organizationsResource = require("./organizations.resource");

export module Organizations {
    "use strict";
    var moduleName = "organizations";
    var translationsPart = "admin";

    var app = angulaModuleFactory.factory(moduleName, translationsPart);

    app.directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());        

    app.controller("OrganizationsController", organizationsController);
    app.service("organizationsResource", organizationsResource);
    
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}