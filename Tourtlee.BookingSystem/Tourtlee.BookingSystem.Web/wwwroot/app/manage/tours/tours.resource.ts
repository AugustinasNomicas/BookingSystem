/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />
/// <reference path="dto/tourlistitemdto.ts" />
/// <reference path="dto/edittourdto.ts" />
/// <reference path="dto/tourlistitemdto.ts" />

"use strict";
class toursResource {
    static $inject: string[] = ["$http", "$window"];

    apiUrl: string;

    constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {
        this.apiUrl = $window["toursConfig"]["apiUrl"] + '/';
    }

    delete = (id: string): angular.IHttpPromise<void> => {
        return this.$http<void>({ url: this.apiUrl + `delete/${id}`, method: "Get" });
    };

    get = (id: string): angular.IHttpPromise<tourListItemDto> => {
        return this.$http<tourListItemDto>({ url: this.apiUrl + `${id}`, method: "Get" });
    };

    getList = (): angular.IHttpPromise<tourListItemDto[]> => {
        return this.$http<tourListItemDto[]>({ url: this.apiUrl, method: "Get" });
    };

    create = (item: EditTourDto): angular.IHttpPromise<EditTourDto> => {
        return this.$http<EditTourDto>({ url: this.apiUrl + `create`, method: "Post", data: item });
    };

    update = (item: EditTourDto): angular.IHttpPromise<EditTourDto> => {
        return this.$http<EditTourDto>({ url: this.apiUrl + `update`, method: "Put", data: item });
    };
}

export = toursResource;    

