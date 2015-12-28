/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />
"use strict";

import {TourDto} from "./dto/tourDto";
import {TourSelectorItemDto} from "./dto/tourSelectorItemDto";

export class ToursResource {
    static $inject: string[] = ["$http", "$window"];
    apiUrl: string;

    constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {
        this.apiUrl = $window["toursConfig"]["apiUrl"] + '/';
    }

    delete = (id: string): angular.IHttpPromise<void> => {
        return this.$http<void>({ url: this.apiUrl + `delete/${id}`, method: "Get" });
    };

    get = (id: string): angular.IHttpPromise<TourDto> => {
        return this.$http<TourDto>({ url: this.apiUrl + `${id}`, method: "Get" });
    };

    getList = (): angular.IHttpPromise<TourDto[]> => {
        return this.$http<TourDto[]>({ url: this.apiUrl, method: "Get" });
    };

    getTourSelectorItems = (): angular.IHttpPromise<TourSelectorItemDto[]> => {
        return this.$http<TourSelectorItemDto[]>({ url: this.apiUrl + `getTourSelectorItems`, method: "Get" });
    };


    create = (item: TourDto): angular.IHttpPromise<TourDto> => {
        return this.$http<TourDto>({ url: this.apiUrl + `create`, method: "Post", data: item });
    };

    update = (item: TourDto): angular.IHttpPromise<TourDto> => {
        return this.$http<TourDto>({ url: this.apiUrl + `update`, method: "Put", data: item });
    };
}


