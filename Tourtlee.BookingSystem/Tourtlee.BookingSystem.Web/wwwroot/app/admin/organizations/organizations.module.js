/// <reference path="../../../../typings/tsd.d.ts" />
var organizations_controller_1 = require("./organizations.controller");
var organizations_resource_1 = require("./organizations.resource");
var angularModuleFactory_1 = require("../../shared/services/angularModuleFactory");
var CrudGrid_directive_1 = require("../../shared/directives/vCrudGrid/CrudGrid.directive");
var cell_editor_directive_1 = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var Organizations;
(function (Organizations) {
    "use strict";
    var moduleName = "organizations";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("crudGrid", CrudGrid_directive_1.CrudGridDirective.factory())
        .directive("cellEditor", cell_editor_directive_1.CellEditorDirective.factory());
    app.controller("OrganizationsController", organizations_controller_1.OrganizationsController);
    app.service("OrganizationsResource", organizations_resource_1.OrganizationsResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Organizations = exports.Organizations || (exports.Organizations = {}));
