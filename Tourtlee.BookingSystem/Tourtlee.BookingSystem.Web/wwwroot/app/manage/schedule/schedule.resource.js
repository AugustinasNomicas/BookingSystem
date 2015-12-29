/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var ScheduleResource = (function () {
    function ScheduleResource($http, $window) {
        var _this = this;
        this.$http = $http;
        this.$window = $window;
        this.getScheduleForTour = function (idTour) {
            return _this.$http({ url: _this.apiUrl + ("getScheduleForTour/" + idTour), method: "Get" });
        };
        this.update = function (item) {
            return _this.$http({ url: _this.apiUrl + "update", method: "Put", data: item });
        };
        this.apiUrl = $window["scheduleConfig"]["apiUrl"] + '/';
    }
    ScheduleResource.$inject = ["$http", "$window"];
    return ScheduleResource;
})();
exports.ScheduleResource = ScheduleResource;
