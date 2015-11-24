/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />
/// <reference path="dto/tourlistitemdto.ts" />
/// <reference path="dto/tourdto.ts" />

"use strict";
class ToursResource {
    static $inject: string[] = ["$http", "$window"];
    apiUrl: string;

    constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {
        this.apiUrl = $window["toursConfig"]["apiUrl"] + '/';
    }

    delete = (id: string): angular.IHttpPromise<void> => {
        return this.$http<void>({ url: this.apiUrl + `delete/${id}`, method: "Get" });
    };

    //get = (id: string): angular.IHttpPromise<tourListItemDto> => {
    //    return this.$http<tourListItemDto>({ url: this.apiUrl + `${id}`, method: "Get" });
    //};

    //getList = (): angular.IHttpPromise<tourListItemDto[]> => {
    //    return this.$http<tourListItemDto[]>({ url: this.apiUrl, method: "Get" });
    //};

    create = (item: TourDto): angular.IHttpPromise<TourDto> => {
        return this.$http<TourDto>({ url: this.apiUrl + `create`, method: "Post", data: item });
    };

    update = (item: TourDto): angular.IHttpPromise<TourDto> => {
        return this.$http<TourDto>({ url: this.apiUrl + `update`, method: "Put", data: item });
    };
}

export = ToursResource;    

