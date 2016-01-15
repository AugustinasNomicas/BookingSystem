/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import {CheckinResource} from "./checkin.resource";
import {CheckinRequestDto} from "./dto/checkinRequestDto";
import {CheckinInitialValuesDto} from "./dto/checkinInitialValuesDto";
import {CheckinResultDto, CheckinResultItemDto } from "./dto/checkinResultDto";
import {ModalWindowService} from "../shared/services/modalWindowService";
import {ToursResource} from "../manage/tours/tours.resource";

export class CheckinController {
    static $inject: string[] = ["$window", "checkinResource", "ModalWindowService", "ToursResource"];

    private vm = this;

    searchText: string;
    checkinResult: CheckinResultDto;
    checkinInProgress: boolean;
    checkinInitialValues: CheckinInitialValuesDto;

    tourSelect: {
        open: boolean;
        idTour: string;
        date: Date;
        datesList: Date[];
    }

    constructor(private $window: angular.IWindowService,
        private checkinResource: CheckinResource,
        private modalWindowService: ModalWindowService,
        private tourResource: ToursResource) {

        this.checkinInitialValues = $window["checkinConfig"]["checkinInitialValues"];
        this.tourSelect = {
            idTour: this.checkinInitialValues.idTour,
            date: this.checkinInitialValues.date,
            datesList: this.checkinInitialValues.datesList,
            open: false
        }
    }
    
    submit(idBooking: string) {
        var request = new CheckinRequestDto();

        request.idBooking = idBooking;
        request.searchText = this.searchText;
        request.idTour = this.tourSelect.idTour;
        request.date = this.tourSelect.date;

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
        this.checkinResource.cancelCheckin(checkinResultItemDto.idBooking).then(() => {
            this.submit(null);
        });
    }

    private tourChanged() {
        this.checkinResource.getDatesForTour(this.tourSelect.idTour).then(result => {
            this.tourSelect.datesList = result.data;
            this.searchText = "";
            if (this.tourSelect.datesList && this.tourSelect.datesList.length > 0) {
                this.tourSelect.date = this.tourSelect.datesList[0];
            }
        });
    }

}