/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/organizationdto.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />


"use strict";
class organizationsResource implements ICrudResource<OrganizationDto> { 
        static $inject: string[] = ["$http"];

        apiUrl: string = 'Admin/OrganizationsApi/';

        constructor(private $http: angular.IHttpService) {
        } 

        delete = (id: string) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: this.apiUrl +`${id}`, method: "Delete" });
        };

        get = (id: string): angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: this.apiUrl + `${id}`, method: "Get" });
        };

        getList = (): angular.IHttpPromise<OrganizationDto[]> => {
            return this.$http<OrganizationDto[]>({ url: this.apiUrl, method: "Get" });
        };

        post = (item: OrganizationDto): angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: this.apiUrl, method: "Post", data: item });
        };

        put = (item: OrganizationDto): angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: this.apiUrl, method: "Put", data: item });
        }; 
}

export = organizationsResource;    

