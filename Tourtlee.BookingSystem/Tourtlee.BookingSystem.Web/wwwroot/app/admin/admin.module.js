/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="services/organizationsservice.ts" />
var States = require("./admin.states");
var vCrudGrid = require("../shared/directives/vCrudGrid/vCrudGrid.directive");
var vCellEditor = require("../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var adminMenu = require("./directives/adminMenu.directive");
var modalWindowService = require("../shared/services/modalwindowservice");
var notificationService = require("../shared/services/notificationService");
var OrganizationsController = require("admin/controllers/organizations.controller");
var organizationsResource = require("admin/resources/organizationsResource");
var OrganizationsService = require("admin/services/OrganizationsService");
var UsersController = require("admin/controllers/users.controller");
var UsersResource = require("admin/resources/UsersResource");
var UsersService = require("admin/services/UsersService");
var Admin;
(function (Admin) {
    "use strict";
    var moduleName = "admin";
    var app = angular.module(moduleName, ["ui.router", "mgcrea.ngStrap", "angular-loading-bar", "ngAnimate", "toastr",
        "ui.bootstrap", "pascalprecht.translate"])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            return new States($stateProvider, $urlRouterProvider, $locationProvider);
        }]);
    app.directive("vAdminMenu", adminMenu.factory())
        .directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());
    // organizations
    app.controller("OrganizationsController", OrganizationsController);
    app.service("organizationsResource", organizationsResource);
    app.service("organizationsService", OrganizationsService);
    // users
    app.controller("UsersController", UsersController);
    app.service("usersResource", UsersResource);
    app.service("usersService", UsersService);
    app.service("modalWindowService", modalWindowService);
    app.service("notificationService", notificationService);
    app.config(['$logProvider', function ($logProvider) {
            $logProvider.debugEnabled(true);
        }]);
    app.config(["$translateProvider", function ($translateProvider) {
            $translateProvider
                .useStaticFilesLoader({
                prefix: "api/translations/" + moduleName + "/",
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
    angular.bootstrap(document, ["admin"], {
        strictDi: true
    });
})(Admin = exports.Admin || (exports.Admin = {}));
