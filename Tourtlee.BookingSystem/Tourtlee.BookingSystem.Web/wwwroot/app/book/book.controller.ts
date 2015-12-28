/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import {CreateBookingSetDto as BookingSetDto, CreateBookingDto as BookingDto } from "./dto/bookDto";
import {BookResource} from "./book.resource";

export class BookController {
    static $inject: string[] = ["$window", "BookResource"];

    private vm = this;
    infoForNewBooking: any;

    numberOfPersons: number;
    maxNumberOfPersons: number;
    bookingSet: BookingSetDto;

    constructor(private $window: angular.IWindowService,
        private bookResource: BookResource) {
        this.infoForNewBooking = $window["bookConfig"]["infoForNewBooking"];

        this.maxNumberOfPersons = 10;
        this.numberOfPersons = 5;

        this.bookingSet = new BookingSetDto();
        this.bookingSet.bookings = [];
        this.bookingSet.idTour = this.infoForNewBooking.idTour;

        this.createBookings();
    }

    submit() {
        this.bookResource.create(this.bookingSet).then((result) => {
            alert(result);
        });
    }

    numberOfPersonsChange() {
        this.createBookings();
    }

    private tourChanged() {
        this.bookResource.getInfoForNewBooking(this.bookingSet.idTour).then(data => {
            this.infoForNewBooking = data.data;
        });
    }

    private createBookings() {
        const diff = this.numberOfPersons - this.bookingSet.bookings.length;
        let i: number;

        if (diff > 0) {
            for (i = this.bookingSet.bookings.length; i < this.numberOfPersons; i++) {
                this.bookingSet.bookings.push(new BookingDto(i));
            }
        } else {
            for (i = this.bookingSet.bookings.length; i > this.numberOfPersons; i--) {
                this.bookingSet.bookings.pop();
            }
        }

    }
}