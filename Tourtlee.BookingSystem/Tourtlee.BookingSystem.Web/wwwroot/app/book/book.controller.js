/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var bookDto_1 = require("./dto/bookDto");
var BookController = (function () {
    function BookController($window, bookResource) {
        this.$window = $window;
        this.bookResource = bookResource;
        this.vm = this;
        this.infoForNewBooking = $window["bookConfig"]["infoForNewBooking"];
        this.maxNumberOfPersons = 10;
        this.numberOfPersons = 5;
        this.bookingSet = new bookDto_1.CreateBookingSetDto();
        this.bookingSet.bookings = [];
        this.bookingSet.idTour = this.infoForNewBooking.idTour;
        this.createBookings();
    }
    BookController.prototype.submit = function () {
        this.bookResource.create(this.bookingSet).then(function (result) {
            alert(result);
        });
    };
    BookController.prototype.numberOfPersonsChange = function () {
        this.createBookings();
    };
    BookController.prototype.tourChanged = function () {
        var _this = this;
        this.bookResource.getInfoForNewBooking(this.bookingSet.idTour).then(function (data) {
            _this.infoForNewBooking = data.data;
        });
    };
    BookController.prototype.createBookings = function () {
        var diff = this.numberOfPersons - this.bookingSet.bookings.length;
        var i;
        if (diff > 0) {
            for (i = this.bookingSet.bookings.length; i < this.numberOfPersons; i++) {
                this.bookingSet.bookings.push(new bookDto_1.CreateBookingDto(i));
            }
        }
        else {
            for (i = this.bookingSet.bookings.length; i > this.numberOfPersons; i--) {
                this.bookingSet.bookings.pop();
            }
        }
    };
    BookController.$inject = ["$window", "BookResource"];
    return BookController;
})();
exports.BookController = BookController;
