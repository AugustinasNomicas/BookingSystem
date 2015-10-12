/// <reference path="../../../typings/tsd.d.ts" />

import States = require("./admin.states");

import vCrudGrid = require("../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");

import adminMenu = require("./directives/adminMenu.directive");

import modalWindowService = require("../shared/services/modalwindowservice");
import notificationService = require("../shared/services/notificationService");

import OrganizationsController = require("./controllers/organizations.controller");
import organizationsResource = require("./resources/organizations.resource");
import organizationsService = require("./services/organizations.service");

import UsersController = require("./controllers/users.controller");
import usersResource = require("./resources/users.resource");
import usersService = require("./services/users.service");

export module Admin {
    "use strict";
    var moduleName = "admin";

    var app = angular.module(moduleName, ["ui.router", "mgcrea.ngStrap", "angular-loading-bar", "ngAnimate", "toastr",
        "ui.bootstrap", "pascalprecht.translate"])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            ($stateProvider: ng.ui.IStateProvider,
                $urlRouterProvider: ng.ui.IUrlRouterProvider,
                $locationProvider: angular.ILocationProvider) => {
                return new States($stateProvider, $urlRouterProvider, $locationProvider);
            }]);

    app.directive("vAdminMenu", adminMenu.factory())
        .directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());

    // organizations
    app.controller("OrganizationsController", OrganizationsController);
    app.service("organizationsResource", organizationsResource);
    app.service("organizationsService", organizationsService);
    

    // users
    app.controller("UsersController", UsersController);
    app.service("usersResource", usersResource);
    app.service("usersService", usersService);

    app.service("modalWindowService", modalWindowService);
    app.service("notificationService", notificationService);

    app.config(['$logProvider', $logProvider => {
        $logProvider.debugEnabled(true);
    }]);

    app.config(["$translateProvider", $translateProvider => {
        $translateProvider
            .useStaticFilesLoader({
                prefix: `api/translations/${moduleName}/`,
                suffix: ""
            })
            .useSanitizeValueStrategy("escape")
            .preferredLanguage("en");
    }]);

    app.config(['toastrConfig', toastrConfig => {
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
}