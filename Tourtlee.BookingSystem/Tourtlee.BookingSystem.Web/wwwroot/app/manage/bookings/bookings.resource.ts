/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
import {BookingsFilterDto} from "./dto/bookingsFilterDto";
import {BookingListDto} from "./dto/bookingsListDto";

export class BookingsResource {
    static $inject: string[] = ["$http", "$window"];
    apiUrl: string;

    constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {
        this.apiUrl = $window["bookingsConfig"]["apiUrl"] + '/';
    }

    get = (filter: BookingsFilterDto): angular.IHttpPromise<BookingListDto> => {
        return this.$http<BookingListDto>({ url: this.apiUrl, method: "Get", params: filter });
    };

}