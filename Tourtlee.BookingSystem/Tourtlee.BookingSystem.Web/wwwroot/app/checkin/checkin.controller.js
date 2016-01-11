/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var checkinRequestDto_1 = require("./dto/checkinRequestDto");
var CheckinController = (function () {
    function CheckinController($window, checkinResource) {
        this.$window = $window;
        this.checkinResource = checkinResource;
        this.vm = this;
    }
    CheckinController.prototype.submit = function (idBooking) {
        var _this = this;
        var request = new checkinRequestDto_1.CheckinRequestDto();
        request.idBooking = idBooking;
        request.searchText = this.searchText;
        this.checkinResource.checkin(request).then(function (result) {
            _this.checkinResult = result.data;
        });
    };
    CheckinController.$inject = ["$window", "checkinResource"];
    return CheckinController;
})();
exports.CheckinController = CheckinController;
