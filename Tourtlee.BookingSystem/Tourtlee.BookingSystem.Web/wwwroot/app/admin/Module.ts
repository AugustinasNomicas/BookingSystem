/// <reference path="../../../typings/tsd.d.ts" />
import OrganizationCtrl = require("admin/controllers/organizationCtrl");
import States = require("admin/states");

import vSample = require("../shared/directives/vSample");

import vCrudGrid = require("../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");


import vAdminMenu = require("admin/directives/vAdminMenu");


import OrganizationResource = require("admin/resources/organizationsResource");

export module Admin {
    'use strict';

    var app = angular.module('admin', ['ui.router', 'mgcrea.ngStrap', 'ngAnimate', 'toastr'])
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

    app.service("organizationsResource", OrganizationResource);


    app.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });


    angular.bootstrap(document, ['admin']);
}