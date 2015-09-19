/// <reference path="../../../typings/tsd.d.ts" />
import OrganizationCtrl = require("admin/controllers/organizationCtrl");
import States = require("admin/states");

import vSample = require("../shared/directives/vSample");
import vAdminMenu = require("admin/directives/vAdminMenu");

export module Admin {
    'use strict';

    var app = angular.module('admin', ['ui.router', 'mgcrea.ngStrap'])
        .config(($stateProvider: ng.ui.IStateProvider,
            $urlRouterProvider: ng.ui.IUrlRouterProvider,
            $locationProvider: angular.ILocationProvider) => {
            return new States($stateProvider, $urlRouterProvider, $locationProvider);
        });

    app.directive("vSample", vSample.factory());
    app.directive("vAdminMenu", vAdminMenu.factory());

    app.controller("organizationCtrl", OrganizationCtrl);

    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });


    angular.bootstrap(document, ['admin']);
}