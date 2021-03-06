/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />
/// <reference path="dto/userlistitemdto.ts" />
"use strict";
var UsersResource = (function () {
    function UsersResource($http, $window) {
        var _this = this;
        this.$http = $http;
        this.$window = $window;
        this.delete = function (id) {
            return _this.$http({ url: _this.apiUrl + ("delete/" + id), method: "Get" });
        };
        this.get = function (id) {
            return _this.$http({ url: _this.apiUrl + ("" + id), method: "Get" });
        };
        this.getList = function () {
            return _this.$http({ url: _this.apiUrl, method: "Get" });
        };
        this.create = function (item) {
            return _this.$http({ url: _this.apiUrl + "create", method: "Post", data: item });
        };
        this.update = function (item) {
            return _this.$http({ url: _this.apiUrl + "update", method: "Put", data: item });
        };
        this.apiUrl = $window["usersConfig"]["apiUrl"] + '/';
    }
    UsersResource.$inject = ["$http", "$window"];
    return UsersResource;
})();
exports.UsersResource = UsersResource;
