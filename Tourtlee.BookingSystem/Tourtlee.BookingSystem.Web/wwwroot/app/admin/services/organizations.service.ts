/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../shared/interfaces/icrudservice.ts" />
/// <reference path="../dto/organizationdto.ts" />

"use strict";

import organizationsResource = require("../resources/organizations.resource");
import notificationService = require("../../shared/services/notificationService");

class organizationsService implements ICrudService<OrganizationDto>  {
    static $inject: string[] = ["organizationsResource", "notificationService"];

    private _organizations: OrganizationDto[];

    get organizations() {
        if (!this._organizations) {
            this.load();
        }

        return this._organizations;
    }

    constructor(private organizationsResource: organizationsResource,
        private notificationService: notificationService) {

    }


    load(): void {
        this.organizationsResource.getList().success((data) => {
            this._organizations = data;
        }).error(() => {
            this.notificationService.error("Couldn't load users");
        });
    }

    delete(id: string): void {
        this.organizationsResource.delete(id).success(() => {
            var item = this.get(id);
            var index = this._organizations.indexOf(item);
            this._organizations.splice(index, 1);
            this.notificationService.successUpdate();
        }).error(() => {
            this.notificationService.errorUpdate("Failed to update");
        });
    }

    get(id: string): OrganizationDto {
        return this.organizations.filter((item) => {
            return item.idOrganization === id;
        })[0];
    }

    getList(): OrganizationDto[] {
        return this.organizations;
    }

    post(item: OrganizationDto): angular.IHttpPromise<OrganizationDto> {
        const promise = this.organizationsResource.post(item);
        promise.post(item).error(() => {
            this.notificationService.errorUpdate("Failed to update");
        }).success(() => {
            this.notificationService.successUpdate();
        });
        return promise;
    }

    put(item: OrganizationDto): angular.IHttpPromise<OrganizationDto> {
        const promise = this.organizationsResource.put(item);
        promise.error(() => {
            this.notificationService.errorUpdate("Failed to update");
        }).success(() => {
            this.notificationService.successUpdate();
        });
        return promise;
    }
}


export = organizationsService;