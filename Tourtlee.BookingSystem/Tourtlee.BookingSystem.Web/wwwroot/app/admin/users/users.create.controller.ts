/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/createuserdto.ts" />

import usersResource = require("./users.resource");
import organizationsResource = require("../organizations/organizations.resource");
import notificationService = require("../../shared/services/notificationservice");

"use strict";

interface Scope {
    createUserForm: any;
}

class usersCreateController {
    static $inject: string[] = ["$scope", "$window", "usersResource", "organizationsResource", "notificationService"];
    vm = this;

    organizations: OrganizationDto[];
    createUser: CreateUserDto;

    constructor(public $scope: Scope,
        private $window: angular.IWindowService,
        private usersResource: usersResource,
        private organizationsResource: organizationsResource,
        private notificationService: notificationService) {
        this.createUser = $window["usersConfig"]["createUser"];
    }

    submit(): void {
        if (!this.$scope.createUserForm.$valid)
            return;

        this.usersResource.create(this.createUser).then((result) => {
            this.createUser = result.data;
            this.notificationService.success("userCreated");
        }, (error) => {
            this.notificationService.error(error.data);
        });
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