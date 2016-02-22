/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

import {BookingsResource} from "./bookings.resource";
import {NotificationService} from "../../shared/services/notificationService";
import {BookingListDto, BookingDto } from "./dto/bookingsListDto";
import {BookingsFilterDto} from "./dto/bookingsFilterDto";

export class BookingsController {
    static $inject: string[] = ["$scope", "$window", "$httpParamSerializer", "BookingsResource", "notificationService"];
    private vm = this;
    private bookings: BookingListDto;
    private displayedBookings: BookingDto[];
    private idTour;
    private filter: BookingsFilterDto;

    showUrl: string;

    constructor(private $scope: any,
        private $window: angular.IWindowService,
        private $httpParamSerializer: any,
        private bookingsResource: BookingsResource,
        private notificationService: NotificationService) {

        this.showUrl = $window["bookingsConfig"]["showUrl"] + '/';
        this.filter = new BookingsFilterDto();
        this.loadData();
    }

    private loadData() {
        this.bookingsResource.get(this.filter).then((data) => {
            this.bookings = data.data;
        });
    }


    private tourChanged() {
        this.filter.idTour = this.idTour;
        this.loadData();
    }

}