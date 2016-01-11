/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import {AngularModuleFactory} from "../shared/services/angularModuleFactory";
import {FormGroupValidationDirective} from "../shared/directives/formGroupValidation/formGroupValidation.directive";
import {CheckinController} from "./checkin.controller";
import {CheckinResource} from "./checkin.resource";
import {TourSelectorDirective} from "../shared/directives/tourSelector/TourSelector.directive";
import {ToursResource} from "../manage/tours/tours.resource";

export module Checkin {
    "use strict";   
    var moduleName = "checkin";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("formGroupValidation", FormGroupValidationDirective.factory());
    app.directive("tourSelectorDirective", TourSelectorDirective.factory());
    app.controller("checkinController", CheckinController);
    app.service("checkinResource", CheckinResource);
    app.service("ToursResource", ToursResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}