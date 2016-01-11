/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var CheckinResource = (function () {
    function CheckinResource($http, $window) {
        var _this = this;
        this.$http = $http;
        this.$window = $window;
        this.checkin = function (item) {
            return _this.$http({ url: _this.apiUrl + "checkin", method: "Post", data: item });
        };
        this.apiUrl = $window["checkinConfig"]["apiUrl"] + '/';
    }
    CheckinResource.$inject = ["$http", "$window"];
    return CheckinResource;
})();
exports.CheckinResource = CheckinResource;
