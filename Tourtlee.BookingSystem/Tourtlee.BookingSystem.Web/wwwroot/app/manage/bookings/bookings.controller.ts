/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

import {BookingsResource} from "./bookings.resource";
import {NotificationService} from "../../shared/services/notificationService";
import {BookingListDto} from "./dto/bookingsListDto";

export class BookingsController {
    static $inject: string[] = ["$scope", "$window", "BookingsResource", "notificationService"];
    private vm = this;
    private bookings: BookingListDto;

    constructor(private $scope: any,
        private $window: angular.IWindowService,
        private bookingsResource: BookingsResource,
        private notificationService: NotificationService) {

        this.loadData();
    }

    private loadData() {
        this.bookingsResource.get(null).then((data) => {
            this.bookings = data.data;
        });
    }

    private tourChanged() {
        //this.bookingsResource.getbookingsForTour(this.bookings.idTour).then(data => {
        //    this.bookings = data.data;
        //    this.$scope.bookingsForm.$setPristine();
        //});
    }

}