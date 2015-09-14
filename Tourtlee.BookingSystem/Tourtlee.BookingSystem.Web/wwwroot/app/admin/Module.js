var admin;
(function (admin) {
    'use strict';
    var app = angular.module('admin', [])
        .controller("organizationCtrl", admin.OrganizationCtrl);
})(admin || (admin = {}));
