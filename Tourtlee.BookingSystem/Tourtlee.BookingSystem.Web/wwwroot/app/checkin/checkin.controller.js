/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var checkinRequestDto_1 = require("./dto/checkinRequestDto");
var CheckinController = (function () {
    function CheckinController($window, checkinResource, modalWindowService, tourResource) {
        this.$window = $window;
        this.checkinResource = checkinResource;
        this.modalWindowService = modalWindowService;
        this.tourResource = tourResource;
        this.vm = this;
        this.loadTours();
    }
    CheckinController.prototype.loadTours = function () {
        var _this = this;
        this.tourResource.getDefault().then(function (result) {
            _this.tourSelect = result.data.idTour;
        });
    };
    CheckinController.prototype.submit = function (idBooking) {
        var _this = this;
        var request = new checkinRequestDto_1.CheckinRequestDto();
        request.idBooking = idBooking;
        request.searchText = this.searchText;
        request.idTour = this.tourSelect.idTour;
        request.date = this.tourSelect.date;
        this.checkinInProgress = true;
        this.checkinResource.checkin(request).then(function (result) {
            _this.checkinResult = result.data;
            _this.checkinInProgress = false;
        });
    };
    CheckinController.prototype.checkinOrCancelWithConfirmation = function (checkinResultItemDto) {
        var _this = this;
        if (!checkinResultItemDto.checkedIn) {
            this.submit(checkinResultItemDto.idBooking);
        }
        else {
            this.modalWindowService.show("checkin.cancelConfirmTitle", "checkin.cancelConfirmContent", function () { _this.cancelCheckin(checkinResultItemDto); }, function () { });
        }
    };
    CheckinController.prototype.cancelCheckin = function (checkinResultItemDto) {
        var _this = this;
        this.checkinInProgress = true;
        this.checkinResource.cancelCheckin(checkinResultItemDto.idBooking).then(function (result) {
            _this.submit(null);
        });
    };
    CheckinController.prototype.tourSelectTourChanged = function () {
        //this.scheduleResource.getScheduleForTour(this.tourSelect.idTour).then(data => {
        //    this.schedule = data.data;
        //    this.$scope.scheduleForm.$setPristine();
        //});
    };
    CheckinController.$inject = ["$window", "checkinResource", "ModalWindowService", "ToursResource"];
    return CheckinController;
})();
exports.CheckinController = CheckinController;
