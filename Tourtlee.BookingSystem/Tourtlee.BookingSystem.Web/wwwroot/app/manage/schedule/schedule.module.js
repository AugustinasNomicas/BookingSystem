/// <reference path="../../../../typings/tsd.d.ts" />
var schedule_resource_1 = require("./schedule.resource");
var angularModuleFactory_1 = require("../../shared/services/angularModuleFactory");
var formGroupValidation_directive_1 = require("../../shared/directives/formGroupValidation/formGroupValidation.directive");
var schedule_controller_1 = require("./schedule.controller");
var TourSelector_directive_1 = require("../../shared/directives/tourSelector/TourSelector.directive");
var tours_resource_1 = require("../tours/tours.resource");
var Schedule;
(function (Schedule) {
    "use strict";
    var moduleName = "schedule";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("formGroupValidation", formGroupValidation_directive_1.FormGroupValidationDirective.factory());
    app.directive("tourSelectorDirective", TourSelector_directive_1.TourSelectorDirective.factory());
    app.controller("ScheduleController", schedule_controller_1.ScheduleController);
    app.service("ScheduleResource", schedule_resource_1.ScheduleResource);
    app.service("ToursResource", tours_resource_1.ToursResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Schedule = exports.Schedule || (exports.Schedule = {}));
