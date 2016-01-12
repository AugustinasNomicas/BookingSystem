/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var checkinRequestDto_1 = require("./dto/checkinRequestDto");
var CheckinController = (function () {
    function CheckinController($window, checkinResource, modalWindowService) {
        this.$window = $window;
        this.checkinResource = checkinResource;
        this.modalWindowService = modalWindowService;
        this.vm = this;
    }
    CheckinController.prototype.submit = function (idBooking) {
        var _this = this;
        var request = new checkinRequestDto_1.CheckinRequestDto();
        request.idBooking = idBooking;
        request.searchText = this.searchText;
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
    CheckinController.$inject = ["$window", "checkinResource", "ModalWindowService"];
    return CheckinController;
})();
exports.CheckinController = CheckinController;
