/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var angularModuleFactory_1 = require("../shared/services/angularModuleFactory");
var formGroupValidation_directive_1 = require("../shared/directives/formGroupValidation/formGroupValidation.directive");
var checkin_controller_1 = require("./checkin.controller");
var checkin_resource_1 = require("./checkin.resource");
var TourSelector_directive_1 = require("../shared/directives/tourSelector/TourSelector.directive");
var tours_resource_1 = require("../manage/tours/tours.resource");
var Checkin;
(function (Checkin) {
    "use strict";
    var moduleName = "checkin";
    var translationsPart = "checkin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    app.directive("formGroupValidation", formGroupValidation_directive_1.FormGroupValidationDirective.factory());
    app.directive("tourSelectorDirective", TourSelector_directive_1.TourSelectorDirective.factory());
    app.controller("checkinController", checkin_controller_1.CheckinController);
    app.service("checkinResource", checkin_resource_1.CheckinResource);
    app.service("ToursResource", tours_resource_1.ToursResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Checkin = exports.Checkin || (exports.Checkin = {}));
