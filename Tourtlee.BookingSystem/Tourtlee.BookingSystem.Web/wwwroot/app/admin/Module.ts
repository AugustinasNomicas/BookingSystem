/// <reference path="../../../typings/tsd.d.ts" />

import States = require("admin/states");

import vSample = require("../shared/directives/vSample");

import vCrudGrid = require("../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");

import vAdminMenu = require("admin/directives/vAdminMenu");

import modalWindowService = require("../shared/services/modalwindowservice");
import notificationService = require("../shared/services/notificationService");

import OrganizationCtrl = require("admin/controllers/OrganizationCtrl");
import organizationResource = require("admin/resources/organizationsResource");

import UsersCtrl = require("admin/controllers/UsersCtrl");
import UsersResource = require("admin/resources/UsersResource");
import UsersService = require("admin/services/UsersService");

export module Admin {
    "use strict";
    var moduleName = "admin";

    var app = angular.module(moduleName, ["ui.router", "mgcrea.ngStrap", "angular-loading-bar", "ngAnimate", "toastr",
        "ui.bootstrap", "pascalprecht.translate"])
        .config(($stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: angular.ILocationProvider) => {
            return new States($stateProvider, $urlRouterProvider, $locationProvider);
        });

    app.directive("vSample", vSample.factory())
        .directive("vAdminMenu", vAdminMenu.factory())
        .directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());

    // organizations
    app.controller("organizationCtrl", OrganizationCtrl);
    app.service("organizationsResource", organizationResource);

    // users
    app.controller("usersCtrl", UsersCtrl);
    app.service("usersResource", UsersResource);
    app.service("usersService", UsersService);
    
    app.service("modalWindowService", modalWindowService);
    app.service("notificationService", notificationService);

    app.config($logProvider => {
        $logProvider.debugEnabled(true);
    });

    app.config(["$translateProvider", $translateProvider => {
        $translateProvider
            .useStaticFilesLoader({
                prefix: `api/translations/${moduleName}/`,
                suffix: ""
            })
            .useSanitizeValueStrategy("escape")
            .preferredLanguage("en");
    }]);

    app.config(toastrConfig => {
        angular.extend(toastrConfig, {
            "showDuration": "100",
            "hideDuration": "100",
            "timeOut": "2000",
            "positionClass": "toast-bottom-right",
            "extendedTimeOut": "5000"
        });
    });


    angular.bootstrap(document, ["admin"]);
}