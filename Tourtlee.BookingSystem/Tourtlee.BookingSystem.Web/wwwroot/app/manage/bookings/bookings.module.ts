/// <reference path="../../../../typings/tsd.d.ts" />

import {BookingsResource} from "./bookings.resource";

import {AngularModuleFactory} from "../../shared/services/angularModuleFactory";
import {BookingsController} from "./bookings.controller";
import {TourSelectorDirective} from "../../shared/directives/tourSelector/TourSelector.directive";
import {ToursResource} from "../tours/tours.resource";

export module Bookings {
    "use strict";
    var moduleName = "bookings";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("tourSelectorDirective", TourSelectorDirective.factory());    
    app.controller("BookingsController", BookingsController);
    
    app.service("BookingsResource", BookingsResource);
    app.service("ToursResource", ToursResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}