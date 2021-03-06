/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="tours.types.ts" />
"use strict";
import {ToursResource} from "./tours.resource";
import {TourDto} from './dto/tourDto';
import {NotificationService} from "../../shared/services/notificationService";
import {ModalWindowService} from "../../shared/services/modalWindowService";

export class ToursEditController {
    static $inject: string[] = ["$scope", "$window", "ToursResource",
        "notificationService", "ModalWindowService", "$translate"];
    private vm = this;

    organizations: OrganizationDto[];
    tour: any;
    tours: TourDto[];
    scheduleUrlTemplate: string;
    scheduleUrl: string;

    constructor(private $scope: IEditTourScope,
        private $window: angular.IWindowService,
        private toursResource: ToursResource,
        private notificationService: NotificationService,
        private modalWindowService: ModalWindowService,
        private $translate: any) {
        this.loadTours();
        this.tour = $window["toursConfig"]["tour"];
        this.scheduleUrlTemplate = $window["toursConfig"]["scheduleUrl"];
        this.updateScheduleUrl();
    }

    submit(): void {
        if (!this.$scope.editTourForm.$valid)
            return;

        this.toursResource.update(this.tour).then((result) => {
            this.notificationService.success("tours.updated");
            this.$scope.editTourForm.$setPristine();
            this.loadTours();
            this.tour = result.data;
        }, (error) => {
            this.notificationService.error(error.data);
        });
    }

    onTourSelect(item): void {
        this.$scope.editTourForm.$setPristine();
        this.updateScheduleUrl();
    }

    createTour(): void {
        var newTour = new TourDto();
        this.tour = newTour;
        this.tours.unshift(newTour);
    }

    deleteTourWithConfirmation(): void {
        if (!this.tour.idTour) // can not delete new tour
            return;

        if (this.tours.length <= 1) {
            this.modalWindowService.show("tours.cannotDeleteLastTourTitle",
                "tours.cannotDeleteLastTourMsg", () => { }, () => { });
        } else {
            this.modalWindowService.show("common.deleteConfirmTitle",
                "common.deleteConfirmContent", () => { this.deleteTour(); }, () => { });
        }
    }

    private deleteTour(): void {
        var id = this.tour.idTour;
        this.toursResource.delete(id).success(() => {
            var index = this.tours.indexOf(this.tour);
            this.tours.splice(index, 1);
            this.tour = this.tours[0];
            this.notificationService.successUpdate();
        }).error(() => {
            this.notificationService.errorUpdate("Failed to update");
        });
    }

    private loadTours(): void {
        this.toursResource.getList().then(response => {
            this.tours = response.data;
        });
    }

    private updateScheduleUrl() {
        this.scheduleUrl = this.scheduleUrlTemplate.replace("%24id", this.tour.idTour);
    }
}