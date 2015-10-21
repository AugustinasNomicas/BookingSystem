/// <reference path="../../../../typings/tsd.d.ts" />

import vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");

import angulaModuleFactory = require("../../shared/services/angularmodulefactory");

import usersController = require("./users.controller");
import usersCreateController = require("./users.create.controller");
import usersResource = require("./users.resource");

export module Users {
    "use strict";
    var moduleName = "users";
    var translationsPart = "admin";

    var app = angulaModuleFactory.factory(moduleName, translationsPart);

    app.directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());

    app.controller("UsersController", usersController);
    app.controller("UsersCreateController", usersCreateController);
    app.service("usersResource", usersResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}