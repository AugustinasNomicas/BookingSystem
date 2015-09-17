/// <reference path="../../../typings/tsd.d.ts" />
import OrganizationCtrl = require("admin/controllers/OrganizationCtrl");
import States = require("admin/states");

export module Admin {
    'use strict';

    angular.module('admin', ['ui.router'])
//        .controller("organizationCtrl", OrganizationCtrl)
        .config(($stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider) => {
        return new States($stateProvider, $urlRouterProvider, $locationProvider);
        });
    

    angular.bootstrap(document, ['admin']);
}