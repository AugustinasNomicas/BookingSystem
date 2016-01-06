/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var BookingsController = (function () {
    function BookingsController($scope, $window, bookingsResource, notificationService) {
        this.$scope = $scope;
        this.$window = $window;
        this.bookingsResource = bookingsResource;
        this.notificationService = notificationService;
        this.vm = this;
        this.loadData();
    }
    BookingsController.prototype.loadData = function () {
        var _this = this;
        this.bookingsResource.get(null).then(function (data) {
            _this.bookings = data.data;
        });
    };
    BookingsController.prototype.tourChanged = function () {
        //this.bookingsResource.getbookingsForTour(this.bookings.idTour).then(data => {
        //    this.bookings = data.data;
        //    this.$scope.bookingsForm.$setPristine();
        //});
    };
    BookingsController.$inject = ["$scope", "$window", "BookingsResource", "notificationService"];
    return BookingsController;
})();
exports.BookingsController = BookingsController;
