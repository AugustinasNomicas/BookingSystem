/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="tours.types.ts" />
"use strict";
var ToursEditController = (function () {
    function ToursEditController($scope, $window, toursResource, notificationService, modalWindowService, $translate) {
        this.$scope = $scope;
        this.$window = $window;
        this.toursResource = toursResource;
        this.notificationService = notificationService;
        this.modalWindowService = modalWindowService;
        this.$translate = $translate;
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
            _this.$scope.editTourForm.$setPristine();
        }, function (error) {
            _this.notificationService.error(error.data);
        });
    };
    ToursEditController.prototype.onTourSelect = function (item) {
        this.$scope.editTourForm.$setPristine();
    };
    ToursEditController.prototype.deleteTourWithConfirmation = function () {
        var _this = this;
        if (this.tours.length <= 1) {
            this.modalWindowService.show("tours.cannotDeleteLastTourTitle", "tours.cannotDeleteLastTourMsg", function () { }, function () { });
        }
        else {
            this.modalWindowService.show("common.deleteConfirmTitle", "common.deleteConfirmContent", function () { _this.deleteTour(); }, function () { });
        }
    };
    ToursEditController.prototype.deleteTour = function () {
        var _this = this;
        var id = this.tour.idTour;
        this.toursResource.delete(id).success(function () {
            var index = _this.tours.indexOf(_this.tour);
            _this.tours.splice(index, 1);
            _this.tour = _this.tours[0];
            _this.notificationService.successUpdate();
        }).error(function () {
            _this.notificationService.errorUpdate("Failed to update");
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
        "notificationService", "ModalWindowService", "$translate"];
    return ToursEditController;
})();
module.exports = ToursEditController;
