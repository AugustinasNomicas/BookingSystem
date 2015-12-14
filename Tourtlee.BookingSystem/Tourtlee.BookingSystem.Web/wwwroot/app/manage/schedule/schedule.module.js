/// <reference path="../../../../typings/tsd.d.ts" />
var schedule_resource_1 = require("./schedule.resource");
var angularModuleFactory_1 = require("../../shared/services/angularModuleFactory");
var formGroupValidation_directive_1 = require("../../shared/directives/formGroupValidation/formGroupValidation.directive");
var Schedule;
(function (Schedule) {
    "use strict";
    var moduleName = "schedule";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("formGroupValidation", formGroupValidation_directive_1.FormGroupValidationDirective.factory());
    app.service("ScheduleResource", schedule_resource_1.ScheduleResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Schedule = exports.Schedule || (exports.Schedule = {}));
