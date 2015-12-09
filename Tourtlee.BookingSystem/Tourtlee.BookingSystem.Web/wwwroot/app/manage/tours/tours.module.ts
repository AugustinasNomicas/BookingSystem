/// <reference path="../../../../typings/tsd.d.ts" />

import {ToursResource} from "./tours.resource";
import {ToursEditController} from "./tours.edit.controller";
import {AngularModuleFactory} from "../../shared/services/angularModuleFactory";
import {FormGroupValidationDirective} from "../../shared/directives/formGroupValidation/formGroupValidation.directive";

export module Tours {
    "use strict";
    var moduleName = "tours";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("formGroupValidation", FormGroupValidationDirective.factory());

    app.controller("ToursEditController", ToursEditController);
    app.service("ToursResource", ToursResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}