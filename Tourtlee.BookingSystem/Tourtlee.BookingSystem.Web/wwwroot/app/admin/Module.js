/// <reference path="../../../typings/tsd.d.ts" />
var OrganizationCtrl = require("admin/controllers/organizationCtrl");
var States = require("admin/states");
var vSample = require("../shared/directives/vSample");
var vCrudGrid = require("../shared/directives/vCrudGrid/vCrudGrid.directive");
var vCellEditor = require("../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var vAdminMenu = require("admin/directives/vAdminMenu");
var modalWindowService = require("../shared/services/modalwindowservice");
var notificationService = require("../shared/services/notificationService");
var organizationResource = require("admin/resources/organizationsResource");
var Admin;
(function (Admin) {
    'use strict';
    var app = angular.module('admin', ['ui.router', 'mgcrea.ngStrap', 'ngAnimate', 'toastr', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
})(Admin = exports.Admin || (exports.Admin = {}));
