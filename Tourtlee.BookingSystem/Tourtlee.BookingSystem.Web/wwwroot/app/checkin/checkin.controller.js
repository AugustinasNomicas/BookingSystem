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
        this.checkinInitialValues = $window["checkinConfig"]["checkinInitialValues"];
        this.tourSelect = {
            idTour: this.checkinInitialValues.idTour,
            date: this.checkinInitialValues.date,
            datesList: this.checkinInitialValues.datesList,
            open: false
        };
    }
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
        this.checkinResource.cancelCheckin(checkinResultItemDto.idBooking).then(function () {
            _this.submit(null);
        });
    };
    CheckinController.prototype.tourChanged = function () {
        var _this = this;
        this.checkinResource.getDatesForTour(this.tourSelect.idTour).then(function (result) {
            _this.tourSelect.datesList = result.data;
            _this.searchText = "";
            if (_this.tourSelect.datesList && _this.tourSelect.datesList.length > 0) {
                _this.tourSelect.date = _this.tourSelect.datesList[0];
            }
        });
    };
    CheckinController.$inject = ["$window", "checkinResource", "ModalWindowService", "ToursResource"];
    return CheckinController;
})();
exports.CheckinController = CheckinController;
