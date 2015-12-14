/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
import {ScheduleDto} from "../dto/scheduleDto";

export class ScheduleResource {
    static $inject: string[] = ["$http", "$window"];
    apiUrl: string;

    constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {
        this.apiUrl = $window["scheduleConfig"]["apiUrl"] + '/';
    }

    get = (id: string): angular.IHttpPromise<ScheduleDto> => {
        return this.$http<ScheduleDto>({ url: this.apiUrl + `${id}`, method: "Get" });
    };
    update = (item: ScheduleDto): angular.IHttpPromise<ScheduleDto> => {
        return this.$http<ScheduleDto>({ url: this.apiUrl + `update`, method: "Put", data: item });
    };
}