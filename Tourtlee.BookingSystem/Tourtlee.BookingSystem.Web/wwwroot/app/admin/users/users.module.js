/// <reference path="../../../../typings/tsd.d.ts" />
var users_controller_1 = require("./users.controller");
var users_create_controller_1 = require("./users.create.controller");
var users_resource_1 = require("./users.resource");
var organizations_resource_1 = require("../organizations/organizations.resource");
var angularModuleFactory_1 = require("../../shared/services/angularModuleFactory");
var CrudGrid_directive_1 = require("../../shared/directives/vCrudGrid/CrudGrid.directive");
var cell_editor_directive_1 = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var formGroupValidation_directive_1 = require("../../shared/directives/formGroupValidation/formGroupValidation.directive");
var Users;
(function (Users) {
    "use strict";
    var moduleName = "users";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("crudGrid", CrudGrid_directive_1.CrudGridDirective.factory());
    app.directive("cellEditor", cell_editor_directive_1.CellEditorDirective.factory());
    app.directive("formGroupValidation", formGroupValidation_directive_1.FormGroupValidationDirective.factory());
    app.controller("UsersController", users_controller_1.UsersController);
    app.controller("UsersCreateController", users_create_controller_1.UsersCreateController);
    app.service("UsersResource", users_resource_1.UsersResource);
    app.service("OrganizationsResource", organizations_resource_1.OrganizationsResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Users = exports.Users || (exports.Users = {}));
