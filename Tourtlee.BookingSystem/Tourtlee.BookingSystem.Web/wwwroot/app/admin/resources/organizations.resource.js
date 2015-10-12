/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../dto/organizationdto.ts" />
/// <reference path="../../shared/interfaces/icrudresource.ts" />
"use strict";
var organizationsResource = (function () {
    function organizationsResource($http) {
        var _this = this;
        this.$http = $http;
        this.delete = function (id) {
            return _this.$http({ url: "api/admin/organizations/" + id, method: "Delete" });
        };
        this.get = function (id) {
            return _this.$http({ url: "api/admin/organizations/" + id, method: "Get" });
        };
        this.getList = function () {
            return _this.$http({ url: "api/admin/organizations", method: "Get" });
        };
        this.post = function (item) {
            return _this.$http({ url: "api/admin/organizations", method: "Post", data: item });
        };
        this.put = function (item) {
            return _this.$http({ url: "api/admin/organizations", method: "Put", data: item });
        };
    }
    organizationsResource.$inject = ["$http"];
    return organizationsResource;
})();
module.exports = organizationsResource;
