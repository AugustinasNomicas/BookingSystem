/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/userlistitemdto.ts" />
"use strict";
var UsersResource = (function () {
    function UsersResource($http) {
        var _this = this;
        this.$http = $http;
        this.getList = function () {
            return _this.$http({ url: "api/admin/users", method: "Get" });
        };
    }
    UsersResource.$inject = ["$http"];
    return UsersResource;
})();
module.exports = UsersResource;
