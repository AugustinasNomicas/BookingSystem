/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

import {ScheduleResource} from "./schedule.resource";
import {NotificationService} from "../../shared/services/notificationService";

export class ScheduleController {
    static $inject: string[] = ["$scope", "$window", "ScheduleResource", "notificationService"];
    private vm = this;
    schedule: any;
    

    constructor(private $scope: any,
        private $window: angular.IWindowService,
        private scheduleResource: ScheduleResource,
        private notificationService: NotificationService) {
        this.schedule = $window["scheduleConfig"]["schedule"];
    }

    submit(): void {
        this.scheduleResource.update(this.schedule).then(() => {
            this.notificationService.success("schedule.updated");
            this.$scope.scheduleForm.$setPristine();
        }, (error) => {
            this.notificationService.error(error.data);
        });
    }

    private tourChanged() {
        this.scheduleResource.getScheduleForTour(this.schedule.idTour).then(data => {
            this.schedule = data.data;
            this.$scope.scheduleForm.$setPristine();
        });
    }

}