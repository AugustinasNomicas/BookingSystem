/// <reference path="../../../../typings/tsd.d.ts" />

import toursResource = require("./tours.resource");
import organizationsResource = require("../organizations/organizations.resource");
import notificationService = require("../../shared/services/notificationservice");
import editUserDto = require("./dto/editUserDto");

"use strict";

interface Scope {
    editUserForm: any;
}

class tourseditController {
    static $inject: string[] = ["$scope", "$window", "toursResource", "organizationsResource",
        "notificationService", "$templateCache"];
    vm = this;

    organizations: OrganizationDto[];
    editUser: editUserDto.editUserDto;

    constructor(public $scope: Scope,
        private $window: angular.IWindowService,
        private toursResource: toursResource,
        private organizationsResource: organizationsResource,
        private notificationService: notificationService,
        private $templateCache: any) {

        this.editUser = $window["toursConfig"]["editUser"];
        this.editUser.organizationMode = editUserDto.editUserOrganizatioModes.Existing;
        this.loadOrganizations();
    }

    submit(): void {
        if (!this.$scope.editUserForm.$valid)
            return;

        this.toursResource.edit(this.editUser).then((result) => {
            this.editUser = result.data;
            this.notificationService.success("usereditd");
        }, (error) => {
            this.notificationService.error(error.data);
        });
    }

    private loadOrganizations(): void {
        this.organizationsResource.getList().then((result) => {
            this.organizations = result.data;
        });
    }
}

export = tourseditController;