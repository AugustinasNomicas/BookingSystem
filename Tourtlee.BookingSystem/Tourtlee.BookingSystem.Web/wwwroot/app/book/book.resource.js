/// <reference path="../../../typings/tsd.d.ts" />
"use strict";
var BookResource = (function () {
    function BookResource($http, $window) {
        var _this = this;
        this.$http = $http;
        this.$window = $window;
        this.create = function (item) {
            return _this.$http({ url: _this.apiUrl + "create", method: "Post", data: item });
        };
        this.getInfoForNewBooking = function (idTour) {
            return _this.$http({ url: _this.apiUrl + ("getInfoForNewBooking/" + idTour), method: "Get" });
        };
        this.apiUrl = $window["bookConfig"]["apiUrl"] + '/';
    }
    BookResource.$inject = ["$http", "$window"];
    return BookResource;
})();
exports.BookResource = BookResource;
