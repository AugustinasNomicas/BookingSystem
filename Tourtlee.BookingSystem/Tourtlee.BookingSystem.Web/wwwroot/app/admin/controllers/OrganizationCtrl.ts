/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';

import OrganizationsResource = require("../resources/organizationsresource");

class OrganizationCtrl {
    static $inject: string[] = ['$scope', 'organizationsResource', 'toastr'];

    public organizations: organizationDto[]

    constructor(public $scope: angular.IScope,
        public organizationsResource: OrganizationsResource,
        public toastr: any) {
        var ctrl = this;

        organizationsResource.getList().then(function (result: angular.IHttpPromiseCallbackArg<organizationDto[]>) {
            ctrl.organizations = result.data;

            //toastr.success('Hello world!', 'Toastr fun!');
        });
    }

}

export = OrganizationCtrl;