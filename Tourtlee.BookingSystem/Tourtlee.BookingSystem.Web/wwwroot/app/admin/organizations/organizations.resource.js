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
            return _this.$http({ url: _this.apiUrl + ("" + id), method: "Delete" });
        };
        this.get = function (id) {
            return _this.$http({ url: _this.apiUrl + ("" + id), method: "Get" });
        };
        this.getList = function () {
            return _this.$http({ url: _this.apiUrl, method: "Get" });
        };
        this.post = function (item) {
            return _this.$http({ url: _this.apiUrl, method: "Post", data: item });
        };
        this.put = function (item) {
            return _this.$http({ url: _this.apiUrl, method: "Put", data: item });
        };
    }
    organizationsResource.$inject = ["$http"];
    return organizationsResource;
})();
module.exports = organizationsResource;
