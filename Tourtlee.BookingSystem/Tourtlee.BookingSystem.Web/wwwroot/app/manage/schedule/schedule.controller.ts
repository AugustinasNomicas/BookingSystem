/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

import {ScheduleResource} from "./schedule.resource";
import {NotificationService} from "../../shared/services/notificationService";

export class ScheduleController {
    static $inject: string[] = ["$window", "ScheduleResource", "notificationService"];
    private vm = this;
    schedule: any;

    constructor(private $window: angular.IWindowService,
        private scheduleResource: ScheduleResource,
        private notificationService: NotificationService) {
        this.schedule = $window["scheduleConfig"]["schedule"];
    }

    submit(): void {
        this.scheduleResource.update(this.schedule).then(() => {
            this.notificationService.success("schedule.updated");
        }, (error) => {
            this.notificationService.error(error.data);
        });
    }
}