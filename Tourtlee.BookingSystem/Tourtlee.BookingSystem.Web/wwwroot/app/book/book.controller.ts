/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

export class BookController {
    static $inject: string[] = ["$window"];

    private vm = this;
    infoForNewBooking: any;
    selectedDate: any;

    numberOfPersons: number;
    maxNumberOfPersons = 10;

    constructor(private $window: angular.IWindowService) {
        this.infoForNewBooking = $window["bookConfig"]["infoForNewBooking"];

        this.maxNumberOfPersons = 10;
        this.numberOfPersons =5;
    }
}