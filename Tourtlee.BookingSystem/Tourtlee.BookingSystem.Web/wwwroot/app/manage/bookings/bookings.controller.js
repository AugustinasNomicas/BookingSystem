/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var bookingsFilterDto_1 = require("./dto/bookingsFilterDto");
var BookingsController = (function () {
    function BookingsController($scope, $window, bookingsResource, notificationService) {
        this.$scope = $scope;
        this.$window = $window;
        this.bookingsResource = bookingsResource;
        this.notificationService = notificationService;
        this.vm = this;
        this.showUrl = $window["bookingsConfig"]["showUrl"] + '/';
        this.filter = new bookingsFilterDto_1.BookingsFilterDto();
        this.loadData();
    }
    BookingsController.prototype.loadData = function () {
        var _this = this;
        this.bookingsResource.get(this.filter).then(function (data) {
            _this.bookings = data.data;
        });
    };
    BookingsController.prototype.tourChanged = function () {
        this.filter.idTour = this.idTour;
        this.loadData();
    };
    BookingsController.$inject = ["$scope", "$window", "BookingsResource", "notificationService"];
    return BookingsController;
})();
exports.BookingsController = BookingsController;
