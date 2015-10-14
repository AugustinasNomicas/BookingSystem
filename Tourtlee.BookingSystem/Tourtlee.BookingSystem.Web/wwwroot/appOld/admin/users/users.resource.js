/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/userlistitemdto.ts" />
/// <reference path="dto/createuserdto.ts" />
"use strict";
var usersResource = (function () {
    function usersResource($http) {
        var _this = this;
        this.$http = $http;
        this.getList = function () {
            return _this.$http({ url: "api/admin/users", method: "Get" });
        };
        this.post = function (item) {
            return _this.$http({ url: "api/admin/users", method: "Post", data: item });
        };
    }
    usersResource.$inject = ["$http"];
    return usersResource;
})();
module.exports = usersResource;
