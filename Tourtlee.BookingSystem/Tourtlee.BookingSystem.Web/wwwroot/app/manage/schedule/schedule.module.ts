/// <reference path="../../../../typings/tsd.d.ts" />

import {ScheduleResource} from "./schedule.resource";

import {AngularModuleFactory} from "../../shared/services/angularModuleFactory";
import {FormGroupValidationDirective} from "../../shared/directives/formGroupValidation/formGroupValidation.directive";

export module Schedule {
    "use strict";
    var moduleName = "schedule";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("formGroupValidation", FormGroupValidationDirective.factory());

    app.service("ScheduleResource", ScheduleResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}