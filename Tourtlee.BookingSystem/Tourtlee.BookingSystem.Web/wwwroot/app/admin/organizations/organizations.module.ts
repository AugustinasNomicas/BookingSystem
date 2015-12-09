/// <reference path="../../../../typings/tsd.d.ts" />

import {OrganizationsController} from "./organizations.controller";
import {OrganizationsResource} from "./organizations.resource";
import {AngularModuleFactory} from "../../shared/services/angularModuleFactory";
import {CrudGridDirective} from "../../shared/directives/vCrudGrid/CrudGrid.directive";
import {CellEditorDirective} from "../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive";

export module Organizations {
    "use strict";
    var moduleName = "organizations";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("crudGrid", CrudGridDirective.factory())
        .directive("cellEditor", CellEditorDirective.factory());        

    app.controller("OrganizationsController", OrganizationsController);
    app.service("OrganizationsResource", OrganizationsResource);
    
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}