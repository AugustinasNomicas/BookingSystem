/// <reference path="../../../typings/tsd.d.ts" />
var organizationCtrl = require("admin/controllers/OrganizationCtrl");
var Admin;
(function (Admin) {
    'use strict';
    angular.module('admin', [])
        .controller("organizationCtrl", organizationCtrl);
    angular.bootstrap(document, ['admin']);
})(Admin = exports.Admin || (exports.Admin = {}));
