/// <reference path="../../../../typings/tsd.d.ts" />
var vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
var vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var formGroupValidationDirective = require("../../shared/directives/formgroupvalidation/formgroupvalidation.directive");
var users_controller_1 = require("./users.controller");
var users_create_controller_1 = require("./users.create.controller");
var users_resource_1 = require("./users.resource");
var organizations_resource_1 = require("../organizations/organizations.resource");
var angularModuleFactory_1 = require("../../shared/services/angularModuleFactory");
var Users;
(function (Users) {
    "use strict";
    var moduleName = "users";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("vCrudGrid", vCrudGrid.factory());
    app.directive("vCellEditor", vCellEditor.factory());
    app.directive("formGroupValidation", formGroupValidationDirective.factory());
    app.controller("UsersController", users_controller_1.UsersController);
    app.controller("UsersCreateController", users_create_controller_1.UsersCreateController);
    app.service("UsersResource", users_resource_1.UsersResource);
    app.service("OrganizationsResource", organizations_resource_1.OrganizationsResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Users = exports.Users || (exports.Users = {}));
