/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../shared/interfaces/icrudservice.ts" />
/// <reference path="../dto/organizationdto.ts" />
"use strict";
var OrganizationsService = (function () {
    function OrganizationsService(organizationsResource, notificationService) {
        this.organizationsResource = organizationsResource;
        this.notificationService = notificationService;
    }
    Object.defineProperty(OrganizationsService.prototype, "organizations", {
        get: function () {
            if (!this._organizations) {
                this.load();
            }
            return this._organizations;
        },
        enumerable: true,
        configurable: true
    });
    OrganizationsService.prototype.load = function () {
        var _this = this;
        this.organizationsResource.getList().success(function (data) {
            _this._organizations = data;
        }).error(function () {
            _this.notificationService.error("Couldn't load users");
        });
    };
    OrganizationsService.prototype.delete = function (id) {
        var _this = this;
        this.organizationsResource.delete(id).success(function () {
            var item = _this.get(id);
            var index = _this._organizations.indexOf(item);
            _this._organizations.splice(index, 1);
            _this.notificationService.successUpdate();
        }).error(function () {
            _this.notificationService.errorUpdate("Failed to update");
        });
    };
    OrganizationsService.prototype.get = function (id) {
        return this.organizations.filter(function (item) {
            return item.idOrganization === id;
        })[0];
    };
    OrganizationsService.prototype.getList = function () {
        return this.organizations;
    };
    OrganizationsService.prototype.post = function (item) {
        var _this = this;
        var promise = this.organizationsResource.post(item);
        this.organizationsResource.post(item).error(function () {
            _this.notificationService.errorUpdate("Failed to update");
        }).success(function () {
            _this.notificationService.successUpdate();
        });
        return promise;
    };
    OrganizationsService.prototype.put = function (item) {
        var _this = this;
        var promise = this.organizationsResource.put(item);
        promise.error(function () {
            _this.notificationService.errorUpdate("Failed to update");
        }).success(function () {
            _this.notificationService.successUpdate();
        });
        return promise;
    };
    OrganizationsService.$inject = ["organizationsResource", "notificationService"];
    return OrganizationsService;
})();
module.exports = OrganizationsService;
