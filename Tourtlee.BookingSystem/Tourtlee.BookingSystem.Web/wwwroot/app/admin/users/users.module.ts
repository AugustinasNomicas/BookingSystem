/// <reference path="../../../../typings/tsd.d.ts" />

import {UsersController} from "./users.controller";
import {UsersCreateController} from "./users.create.controller";
import {UsersResource} from "./users.resource";
import {OrganizationsResource} from "../organizations/organizations.resource";
import {AngularModuleFactory} from "../../shared/services/angularModuleFactory";
import {CrudGridDirective} from "../../shared/directives/vCrudGrid/CrudGrid.directive";
import {CellEditorDirective} from "../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive";
import {FormGroupValidationDirective} from "../../shared/directives/formGroupValidation/formGroupValidation.directive";

export module Users {
    "use strict";
    var moduleName = "users";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("crudGrid", CrudGridDirective.factory());
    app.directive("cellEditor", CellEditorDirective.factory());

    app.directive("formGroupValidation", FormGroupValidationDirective.factory());

    app.controller("UsersController", UsersController);
    app.controller("UsersCreateController", UsersCreateController);
    app.service("UsersResource", UsersResource);

    app.service("OrganizationsResource", OrganizationsResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}