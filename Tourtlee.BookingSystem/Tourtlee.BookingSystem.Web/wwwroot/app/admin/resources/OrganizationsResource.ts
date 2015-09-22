/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/organizationdto.ts" />

'use strict';
class organizationsResource { 
        static $inject: string[] = ['$http'];

        constructor(private $http: angular.IHttpService) {
        } 
    t
        public delete = (id: string) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: `api/admin/${id}`, method: "Delete" });
        };

        public get = (id: string) : angular.IHttpPromise<OrganizationDto> => {
            return this.$http<OrganizationDto>({ url: `api/admin/organizations/${id}`, method: "Get" });
        };

        public getList = () : angular.IHttpPromise<OrganizationDto[]> => {
            return this.$http<OrganizationDto[]>({ url: `api/admin/organizations`, method: "Get" });
        };

        public post = (item: OrganizationDto) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: `api/admin/organizations`, method: "Post", data: {item: item} });
        };

        public put = (updatedItem: OrganizationDto) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: `api/admin/organizations`, method: "Put", data: {updatedItem: updatedItem} });
        }; 
}

export = organizationsResource;    

