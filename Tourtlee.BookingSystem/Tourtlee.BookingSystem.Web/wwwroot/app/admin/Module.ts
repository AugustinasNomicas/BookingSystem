/// <reference path="../../../typings/tsd.d.ts" />
import organizationCtrl = require("admin/controllers/OrganizationCtrl");

export module Admin {
    'use strict';

    angular.module('admin', [])
        .controller("organizationCtrl", organizationCtrl);


    angular.bootstrap(document, ['admin']);
}