/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/organizationdto.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />

"use strict";
export class OrganizationsResource implements ICrudResource<OrganizationDto> { 
        static $inject: string[] = ["$http", "$window"];

        apiUrl: string;

        constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {
            this.apiUrl = $window["organizationsConfig"]["apiUrl"] + '/';
        } 

        delete = (id: string) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: this.apiUrl + `delete/${id}`, method: "Get" });
        };

        get = (id: string): angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: this.apiUrl + `${id}`, method: "Get" });
        };

        getList = (): angular.IHttpPromise<OrganizationDto[]> => {
            return this.$http<OrganizationDto[]>({ url: this.apiUrl, method: "Get" });
        };

        create = (item: OrganizationDto): angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: this.apiUrl + `create`, method: "Post", data: item });
        };

        update = (item: OrganizationDto): angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: this.apiUrl + `update`, method: "Put", data: item });
        }; 
}