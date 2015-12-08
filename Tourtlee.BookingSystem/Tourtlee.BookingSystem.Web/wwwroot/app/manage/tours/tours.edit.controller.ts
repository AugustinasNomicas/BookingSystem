/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="tours.types.ts" />
"use strict";
import {ToursResource} from "./tours.resource";
import notificationService = require("../../shared/services/notificationservice");
import modalWindowService = require("../../shared/services/modalWindowService");
import {TourDto} from './dto/tourDto';

export class ToursEditController {
    static $inject: string[] = ["$scope", "$window", "ToursResource",
        "notificationService", "ModalWindowService", "$translate"];
    private vm = this;

    organizations: OrganizationDto[];
    tour: any;
    tours: TourDto[];

    constructor(private $scope: IEditTourScope,
        private $window: angular.IWindowService,
        private toursResource: ToursResource,
        private notificationService: notificationService,
        private modalWindowService: modalWindowService,
        private $translate: any) {
        this.loadTours();
        this.tour = $window["toursConfig"]["tour"];
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

}