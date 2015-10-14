/// <reference path="../../../../typings/tsd.d.ts" />
var vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
var vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var modalWindowService = require("../../shared/services/modalwindowservice");
var notificationService = require("../../shared/services/notificationService");
var organizationsController = require("./organizations.controller");
var organizationsResource = require("./organizations.resource");
var organizationsService = require("./organizations.service");
var Organizations;
(function (Organizations) {
    "use strict";
    var moduleName = "organizations";
    var translationsPart = "admin";
    var app = angular.module(moduleName, ["mgcrea.ngStrap", "angular-loading-bar", "ngAnimate", "toastr",
        "ui.bootstrap", "pascalprecht.translate"]);
    app.directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());
    app.controller("OrganizationsController", organizationsController);
    app.service("organizationsResource", organizationsResource);
    app.service("organizationsService", organizationsService);
    app.service("modalWindowService", modalWindowService);
    app.service("notificationService", notificationService);
    app.config(['$logProvider', function ($logProvider) {
            $logProvider.debugEnabled(true);
        }]);
    app.config(["$translateProvider", function ($translateProvider) {
            $translateProvider
                .useStaticFilesLoader({
                prefix: "api/translations/" + translationsPart + "/",
                suffix: ""
            })
                .useSanitizeValueStrategy("escape")
                .preferredLanguage("en");
        }]);
    app.config(['toastrConfig', function (toastrConfig) {
            angular.extend(toastrConfig, {
                "showDuration": "100",
                "hideDuration": "100",
                "timeOut": "2000",
                "positionClass": "toast-bottom-right",
                "extendedTimeOut": "5000"
            });
        }]);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Organizations = exports.Organizations || (exports.Organizations = {}));
