/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

import {CreateUserDto, CreateUserOrganizationModes} from "./dto/CreateUserDto";
import {UsersResource} from "./users.resource";
import {OrganizationsResource} from "../organizations/organizations.resource";
import {NotificationService} from "../../shared/services/notificationService";

export interface IScope {
    createUserForm: any;
}

export class UsersCreateController {
    static $inject: string[] = ["$scope", "$window", "UsersResource", "OrganizationsResource",
        "notificationService", "$templateCache"];

    organizations: OrganizationDto[];
    createUser: CreateUserDto;

    constructor(private $scope: IScope,
        private $window: angular.IWindowService,
        private usersResource: UsersResource,
        private organizationsResource: OrganizationsResource,
        private notificationService: NotificationService,
        private $templateCache: any) {

        this.createUser = $window["usersConfig"]["createUser"];
        this.createUser.organizationMode = CreateUserOrganizationModes.Existing;
        this.loadOrganizations();
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

    private loadOrganizations(): void {
        this.organizationsResource.getList().then((result) => {
            this.organizations = result.data;
        });
    }
}
