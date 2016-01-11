/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import {CheckinResource} from "./checkin.resource";
import {CheckinRequestDto} from "./dto/checkinRequestDto";

export class CheckinController {
    static $inject: string[] = ["$window", "checkinResource"];

    private vm = this;

    searchText: string;
    checkinResult: any;

    constructor(private $window: angular.IWindowService,
        private checkinResource: CheckinResource) {
    }

    submit(idBooking: string) {
        var request: CheckinRequestDto = new CheckinRequestDto();

        request.idBooking = idBooking;
        request.searchText = this.searchText;

        this.checkinResource.checkin(request).then((result) => {
            this.checkinResult = result.data;
        });
    }
}