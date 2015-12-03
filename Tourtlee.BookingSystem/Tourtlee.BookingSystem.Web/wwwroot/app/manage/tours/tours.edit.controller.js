/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="tours.types.ts" />
"use strict";
var ToursEditController = (function () {
    function ToursEditController($scope, $window, toursResource, notificationService, $templateCache) {
        this.$scope = $scope;
        this.$window = $window;
        this.toursResource = toursResource;
        this.notificationService = notificationService;
        this.$templateCache = $templateCache;
        this.vm = this;
        this.loadTours();
    }
    ToursEditController.prototype.submit = function () {
        var _this = this;
        if (!this.$scope.editTourForm.$valid)
            return;
        this.toursResource.update(this.tour).then(function (result) {
            _this.tour = result.data;
            _this.notificationService.success("editTour");
        }, function (error) {
            _this.notificationService.error(error.data);
        });
    };
    ToursEditController.prototype.loadTours = function () {
        var _this = this;
        this.toursResource.getList().then(function (response) {
            _this.tours = response.data;
            _this.tour = _this.tours[0];
        });
    };
    ToursEditController.$inject = ["$scope", "$window", "ToursResource",
        "notificationService", "$templateCache"];
    return ToursEditController;
})();
module.exports = ToursEditController;
