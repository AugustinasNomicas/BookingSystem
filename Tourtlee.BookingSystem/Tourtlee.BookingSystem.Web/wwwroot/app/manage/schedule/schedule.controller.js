/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var ScheduleController = (function () {
    function ScheduleController($window, scheduleResource, notificationService) {
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
    ScheduleController.$inject = ["$window", "ScheduleResource", "notificationService"];
    return ScheduleController;
})();
exports.ScheduleController = ScheduleController;
