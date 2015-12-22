/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import {CreateBookingSetDto} from "./dto/bookDto";

export class BookResource {
    static $inject: string[] = ["$http", "$window"];
    apiUrl: string;

    constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {
        this.apiUrl = $window["bookConfig"]["apiUrl"] + '/';
    }


    create = (item: CreateBookingSetDto): angular.IHttpPromise<CreateBookingSetDto> => {
        return this.$http<CreateBookingSetDto>({ url: this.apiUrl + `create`, method: "Post", data: item });
    };
}