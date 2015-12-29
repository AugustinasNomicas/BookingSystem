/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var ScheduleController = (function () {
    function ScheduleController($scope, $window, scheduleResource, notificationService) {
        this.$scope = $scope;
        this.$window = $window;
        this.scheduleResource = scheduleResource;
        this.notificationService = notificationService;
        this.vm = this;
        this.schedule = $window["scheduleConfig"]["schedule"];
    }
    ScheduleController.prototype.submit = function () {
        var _this = this;
        this.scheduleResource.update(this.schedule).then(function () {
            _this.notificationService.success("schedule.updated");
        }, function (error) {
            _this.notificationService.error(error.data);
        });
    };
    ScheduleController.prototype.tourChanged = function () {
        var _this = this;
        this.scheduleResource.getScheduleForTour(this.schedule.idTour).then(function (data) {
            _this.schedule = data.data;
            _this.$scope.scheduleForm.$setPristine();
        });
    };
    ScheduleController.$inject = ["$scope", "$window", "ScheduleResource", "notificationService"];
    return ScheduleController;
})();
exports.ScheduleController = ScheduleController;
