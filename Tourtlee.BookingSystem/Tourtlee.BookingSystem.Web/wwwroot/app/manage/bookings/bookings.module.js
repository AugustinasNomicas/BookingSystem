/// <reference path="../../../../typings/tsd.d.ts" />
var bookings_resource_1 = require("./bookings.resource");
var angularModuleFactory_1 = require("../../shared/services/angularModuleFactory");
var bookings_controller_1 = require("./bookings.controller");
var TourSelector_directive_1 = require("../../shared/directives/tourSelector/TourSelector.directive");
var tours_resource_1 = require("../tours/tours.resource");
var Bookings;
(function (Bookings) {
    "use strict";
    var moduleName = "bookings";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("tourSelectorDirective", TourSelector_directive_1.TourSelectorDirective.factory());
    app.controller("BookingsController", bookings_controller_1.BookingsController);
    app.service("BookingsResource", bookings_resource_1.BookingsResource);
    app.service("ToursResource", tours_resource_1.ToursResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Bookings = exports.Bookings || (exports.Bookings = {}));
