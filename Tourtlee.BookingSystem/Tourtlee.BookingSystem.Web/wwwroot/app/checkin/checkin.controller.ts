/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import {CheckinResource} from "./checkin.resource";
import {CheckinRequestDto} from "./dto/checkinRequestDto";
import {CheckinResultDto, CheckinResultItemDto } from "./dto/checkinResultDto";
import {ModalWindowService} from "../shared/services/modalWindowService";

export class CheckinController {
    static $inject: string[] = ["$window", "checkinResource", "ModalWindowService"];

    private vm = this;

    searchText: string;
    checkinResult: CheckinResultDto;
    checkinInProgress: boolean;

    constructor(private $window: angular.IWindowService,
        private checkinResource: CheckinResource,
        private modalWindowService: ModalWindowService) {
    }

    submit(idBooking: string) {
        var request = new CheckinRequestDto();

        request.idBooking = idBooking;
        request.searchText = this.searchText;
        this.checkinInProgress = true;
        this.checkinResource.checkin(request).then((result) => {
            this.checkinResult = result.data;
            this.checkinInProgress = false;
        });
    }

    checkinOrCancelWithConfirmation(checkinResultItemDto: CheckinResultItemDto) {
        if (!checkinResultItemDto.checkedIn) {
            this.submit(checkinResultItemDto.idBooking);
        } else {
            this.modalWindowService.show("checkin.cancelConfirmTitle",
                "checkin.cancelConfirmContent", () => { this.cancelCheckin(checkinResultItemDto); }, () => { });
        }
    }

    cancelCheckin(checkinResultItemDto: CheckinResultItemDto) {
        this.checkinInProgress = true;
        this.checkinResource.cancelCheckin(checkinResultItemDto.idBooking).then((result) => {
            this.submit(null);
        });
    }
}