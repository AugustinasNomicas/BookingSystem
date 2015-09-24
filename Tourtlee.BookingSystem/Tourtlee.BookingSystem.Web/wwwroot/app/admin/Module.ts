/// <reference path="../../../typings/tsd.d.ts" />
import OrganizationCtrl = require("admin/controllers/organizationCtrl");
import States = require("admin/states");

import vSample = require("../shared/directives/vSample");

import vCrudGrid = require("../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");


import vAdminMenu = require("admin/directives/vAdminMenu");

import modalWindowService = require("../shared/services/modalwindowservice");
import notificationService = require("../shared/services/notificationService");

import organizationResource = require("admin/resources/organizationsResource");


export module Admin {
    'use strict';

    var app = angular.module('admin', ['ui.router', 'mgcrea.ngStrap', 'ngAnimate', 'toastr', 'ui.bootstrap'])
        .config(($stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: angular.ILocationProvider) => {
            return new States($stateProvider, $urlRouterProvider, $locationProvider);
        });

    app.directive("vSample", vSample.factory())
        .directive("vAdminMenu", vAdminMenu.factory())
        .directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());

    app.controller("organizationCtrl", OrganizationCtrl);

    app.service("organizationsResource", organizationResource);

    app.service("modalWindowService", modalWindowService);
    app.service("notificationService", notificationService);


    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });

    app.config(function (toastrConfig) {
        angular.extend(toastrConfig, {
            "showDuration": "100",
            "hideDuration": "100",
            "timeOut": "2000",
            "positionClass": "toast-bottom-right",
            "extendedTimeOut": "5000",
        });
    });


    angular.bootstrap(document, ['admin']);
}