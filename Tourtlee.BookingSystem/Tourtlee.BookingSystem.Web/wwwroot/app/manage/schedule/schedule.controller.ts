/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

export class ScheduleController {
    static $inject: string[] = ["$window"];
    private vm = this;
    schedule: any;

    constructor(private $window: angular.IWindowService) {
        this.schedule = $window["scheduleConfig"]["schedule"];
    }
}