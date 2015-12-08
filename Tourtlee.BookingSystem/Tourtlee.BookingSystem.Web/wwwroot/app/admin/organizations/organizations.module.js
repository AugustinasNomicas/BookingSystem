/// <reference path="../../../../typings/tsd.d.ts" />
var vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
var vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var organizations_controller_1 = require("./organizations.controller");
var organizations_resource_1 = require("./organizations.resource");
var angularModuleFactory_1 = require("../../shared/services/angularModuleFactory");
var Organizations;
(function (Organizations) {
    "use strict";
    var moduleName = "organizations";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());
    app.controller("OrganizationsController", organizations_controller_1.OrganizationsController);
    app.service("OrganizationsResource", organizations_resource_1.OrganizationsResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Organizations = exports.Organizations || (exports.Organizations = {}));
