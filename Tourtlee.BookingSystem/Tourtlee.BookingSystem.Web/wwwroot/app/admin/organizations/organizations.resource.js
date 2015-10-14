/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/organizationdto.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />
"use strict";
var organizationsResource = (function () {
    function organizationsResource($http) {
        var _this = this;
        this.$http = $http;
        this.apiUrl = 'Admin/OrganizationsApi/';
        this.delete = function (id) {
            return _this.$http({ url: _this.apiUrl + ("" + id), method: "Get" });
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
    }
    organizationsResource.$inject = ["$http"];
    return organizationsResource;
})();
module.exports = organizationsResource;
