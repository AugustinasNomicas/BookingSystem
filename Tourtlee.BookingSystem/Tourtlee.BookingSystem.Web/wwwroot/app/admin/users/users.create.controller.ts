/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/createuserdto.ts" />
import usersResource = require("./users.resource");
import organizationsResource = require("../organizations/organizations.resource");


"use strict";

class usersCreateController {
    static $inject: string[] = ["$scope", "$window", "usersResource", "organizationsResource"];
    vm = this;

    organizations: OrganizationDto[];
    createUser: CreateUserDto;

    constructor(public $scope: angular.IScope,
        private $window: angular.IWindowService,
        private usersResource: usersResource,
        private organizationsResource: organizationsResource) {
        this.createUser = $window["usersConfig"]["createUser"];

    }

    submit(): void {
        this.usersResource.create(this.createUser)
    }

    onOrganizationModeChange(): void {
        if (this.createUser.organizationMode == 0
            && !this.organizations) {
            this.loadOrganizations();
        }
    }

    private loadOrganizations(): void {
        this.organizationsResource.getList().then((result) => {
            this.organizations = result.data;
        });
    }
}

export = usersCreateController;