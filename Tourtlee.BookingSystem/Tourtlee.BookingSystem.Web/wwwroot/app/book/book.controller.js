/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var BookController = (function () {
    function BookController($window) {
        this.$window = $window;
        this.vm = this;
        this.maxNumberOfPersons = 10;
        this.infoForNewBooking = $window["bookConfig"]["infoForNewBooking"];
        this.maxNumberOfPersons = 10;
        this.numberOfPersons = 5;
    }
    BookController.$inject = ["$window"];
    return BookController;
})();
exports.BookController = BookController;
