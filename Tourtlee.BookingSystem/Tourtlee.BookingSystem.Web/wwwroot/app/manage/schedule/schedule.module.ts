/// <reference path="../../../../typings/tsd.d.ts" />

import {ScheduleResource} from "./schedule.resource";

import {AngularModuleFactory} from "../../shared/services/angularModuleFactory";
import {FormGroupValidationDirective} from "../../shared/directives/formGroupValidation/formGroupValidation.directive";
import {ScheduleController} from "./schedule.controller";
import {TourSelectorDirective} from "../../shared/directives/tourSelector/TourSelector.directive";
import {ToursResource} from "../tours/tours.resource";
import {DatetimepickerNeutralTimezone} from "../../shared/directives/datetimepickerNeutralTimezone.directive";

export module Schedule {
    "use strict";
    var moduleName = "schedule";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("formGroupValidation", FormGroupValidationDirective.factory());
    app.directive("tourSelectorDirective", TourSelectorDirective.factory());    
    app.directive("datetimepickerNeutralTimezone", DatetimepickerNeutralTimezone.factory());
    app.controller("ScheduleController", ScheduleController);
    
    app.service("ScheduleResource", ScheduleResource);
    app.service("ToursResource", ToursResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}