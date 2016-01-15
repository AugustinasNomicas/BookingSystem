/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import {CheckinRequestDto} from "./dto/checkinRequestDto";
import {CheckinResultDto} from "./dto/checkinResultDto";

export class CheckinResource {
    static $inject: string[] = ["$http", "$window"];
    apiUrl: string;

    constructor(private $http: angular.IHttpService, private $window: angular.IWindowService) {
        this.apiUrl = $window["checkinConfig"]["apiUrl"] + '/';
    }

    checkin = (item: CheckinRequestDto): angular.IHttpPromise<CheckinResultDto> => {
        return this.$http<CheckinResultDto>({ url: this.apiUrl + `checkin`, method: "Post", data: item});
    };

    cancelCheckin = (idBooking: string): angular.IHttpPromise<void> => {
        return this.$http<void>({ url: this.apiUrl + `cancelCheckin`, method: "Post", data: { idBooking: idBooking } });
    };

    getDatesForTour = (idTour: string): angular.IHttpPromise<any> => {
        return this.$http<any>({ url: this.apiUrl + `getDatesForTour/${idTour}`, method: "Get" });
    };
}