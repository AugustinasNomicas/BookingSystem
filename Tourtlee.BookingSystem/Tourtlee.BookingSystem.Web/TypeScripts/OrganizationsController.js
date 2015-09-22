/// <reference path="../typings/tsd.d.ts" />
'use strict';
var organizationsResource = (function () {
    function organizationsResource($http) {
        var _this = this;
        this.$http = $http;
        this.show = function () {
            return _this.$http({ url: "api/admin/", method: "Get" });
        };
        this.get = function (id) {
            return _this.$http({ url: "api/admin/" + id, method: "Get" });
        };
        this.getList = function () {
            return _this.$http({ url: "api/admin/", method: "Get" });
        };
        this.post = function (item) {
            return _this.$http({ url: "api/admin/", method: "Post", data: { item: item } });
        };
        this.put = function (updatedItem) {
            return _this.$http({ url: "api/admin/", method: "Put", data: { updatedItem: updatedItem } });
        };
        this.delete = function (id) {
            return _this.$http({ url: "api/admin/" + id, method: "Delete" });
        };
    }
    return organizationsResource;
})();
exports.organizationsResource = organizationsResource;
angular.module("admin").service("organizationsResource", ["$http", organizationsResource]);
