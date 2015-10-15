/// <reference path="../../../../typings/tsd.d.ts" />
var vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
var vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var angulaModuleFactory = require("../../shared/services/angularmodulefactory");
var usersController = require("./users.controller");
var usersResource = require("./users.resource");
var Users;
(function (Users) {
    "use strict";
    var moduleName = "users";
    var translationsPart = "admin";
    var app = angulaModuleFactory.factory(moduleName, translationsPart);
    app.directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());
    app.controller("UsersController", usersController);
    app.service("usersResource", usersResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Users = exports.Users || (exports.Users = {}));
