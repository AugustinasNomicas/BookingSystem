/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';

import OrganizationsResource = require("admin/resources/organizationsResource");

class organizationCtrl {
    static $inject: string[] = ['$scope', 'organizationsResource'];

    public organizations: organizationDto[]

    constructor(public $scope: angular.IScope,
        public organizationsResource: OrganizationsResource) {
        var ctrl = this;

        organizationsResource.getList().then(function (result: angular.IHttpPromiseCallbackArg<organizationDto[]>) {
            ctrl.organizations = result.data;
        });
    }

}

export = organizationCtrl;