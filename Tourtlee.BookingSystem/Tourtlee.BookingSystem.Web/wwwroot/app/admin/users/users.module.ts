/// <reference path="../../../../typings/tsd.d.ts" />

import vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");

import formGroupValidationDirective = require("../../shared/directives/formgroupvalidation/formgroupvalidation.directive");

import {UsersController} from "./users.controller";
import {UsersCreateController} from "./users.create.controller";
import {UsersResource} from "./users.resource";
import {OrganizationsResource} from "../organizations/organizations.resource";
import {AngularModuleFactory} from "../../shared/services/angularModuleFactory";

export module Users {
    "use strict";
    var moduleName = "users";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("vCrudGrid", vCrudGrid.factory());
    app.directive("vCellEditor", vCellEditor.factory());

    app.directive("formGroupValidation", formGroupValidationDirective.factory());

    app.controller("UsersController", UsersController);
    app.controller("UsersCreateController", UsersCreateController);
    app.service("UsersResource", UsersResource);

    app.service("OrganizationsResource", OrganizationsResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}