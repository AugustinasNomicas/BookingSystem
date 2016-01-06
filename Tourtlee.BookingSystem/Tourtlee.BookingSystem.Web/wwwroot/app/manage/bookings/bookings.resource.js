/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var BookingsResource = (function () {
    function BookingsResource($http, $window) {
        var _this = this;
        this.$http = $http;
        this.$window = $window;
        this.get = function (filter) {
            return _this.$http({ url: _this.apiUrl, method: "Get", data: filter });
        };
        this.apiUrl = $window["bookingsConfig"]["apiUrl"] + '/';
    }
    BookingsResource.$inject = ["$http", "$window"];
    return BookingsResource;
})();
exports.BookingsResource = BookingsResource;
