/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var ScheduleController = (function () {
    function ScheduleController($window) {
        this.$window = $window;
        this.vm = this;
        this.schedule = $window["scheduleConfig"]["schedule"];
    }
    ScheduleController.$inject = ["$window"];
    return ScheduleController;
})();
exports.ScheduleController = ScheduleController;
