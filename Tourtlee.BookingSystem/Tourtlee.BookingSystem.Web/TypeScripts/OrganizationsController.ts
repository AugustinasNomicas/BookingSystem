

/// <reference path="../typings/tsd.d.ts" />
'use strict';
    export class organizationsResource { 
        constructor(private $http: angular.IHttpService) {
        } 

        public show = () : angular.IHttpPromise<string> => {
            return this.$http<string>({ url: `api/admin/`, method: "Get" });
        };

        public get = (id: string) : angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: `api/admin/${id}`, method: "Get" });
        };

        public getList = () : angular.IHttpPromise<OrganizationDto[]> => {
            return this.$http<OrganizationDto[]>({ url: `api/admin/`, method: "Get" });
        };

        public post = (item: OrganizationDto) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: `api/admin/`, method: "Post", data: {item: item} });
        };

        public put = (item: OrganizationDto) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: `api/admin/`, method: "Put", data: {item: item} });
        };

        public delete = (id: string) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: `api/admin/${id}`, method: "Delete" });
        }; 
    }
    
    angular.module("admin").service("organizationsResource", ["$http", organizationsResource]);
