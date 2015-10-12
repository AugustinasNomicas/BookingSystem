/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/organizationdto.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />

"use strict";
class OrganizationsResource implements ICrudResource<OrganizationDto> { 
        static $inject: string[] = ["$http"];

        constructor(private $http: angular.IHttpService) {
        } 

        delete = (id: string) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: `api/admin/organizations/${id}`, method: "Delete" });
        };

        get = (id: string): angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: `api/admin/organizations/${id}`, method: "Get" });
        };

        getList = (): angular.IHttpPromise<OrganizationDto[]> => {
            return this.$http<OrganizationDto[]>({ url: `api/admin/organizations`, method: "Get" });
        };

        post = (item: OrganizationDto): angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: `api/admin/organizations`, method: "Post", data: item });
        };

        put = (item: OrganizationDto): angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: `api/admin/organizations`, method: "Put", data: item });
        }; 
}

export = OrganizationsResource;    

