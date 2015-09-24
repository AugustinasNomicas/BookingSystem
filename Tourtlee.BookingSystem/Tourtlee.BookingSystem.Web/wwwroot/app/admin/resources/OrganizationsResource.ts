/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/organizationdto.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />

'use strict';
class organizationsResource implements ICrudResource { 
        static $inject: string[] = ['$http'];

        constructor(private $http: angular.IHttpService) {
        } 

        public delete = (id: string) : angular.IHttpPromise<void> => {
            return this.$http<void>({ url: `api/admin/organizations/${id}`, method: "Delete" });
        };

        public get = (id: string): angular.IHttpPromise<organizationDto> => {
            return this.$http<organizationDto>({ url: `api/admin/organizations/${id}`, method: "Get" });
        };

        public getList = (): angular.IHttpPromise<organizationDto[]> => {
            return this.$http<organizationDto[]>({ url: `api/admin/organizations`, method: "Get" });
        };

        public post = (item: organizationDto): angular.IHttpPromise<organizationDto> => {
            return this.$http<organizationDto>({ url: `api/admin/organizations`, method: "Post", data: item });
        };

        public put = (item: organizationDto): angular.IHttpPromise<organizationDto> => {
            return this.$http<organizationDto>({ url: `api/admin/organizations`, method: "Put", data: item });
        }; 
}

export = organizationsResource;    

