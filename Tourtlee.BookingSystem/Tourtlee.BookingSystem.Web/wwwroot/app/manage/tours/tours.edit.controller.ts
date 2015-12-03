/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="tours.types.ts" />
"use strict";
import toursResource = require("./tours.resource");
import notificationService = require("../../shared/services/notificationservice");
import modalWindowService = require("../../shared/services/modalWindowService");


class ToursEditController {
    static $inject: string[] = ["$scope", "$window", "ToursResource",
        "notificationService", "ModalWindowService", "$translate"];
    private vm = this;

    organizations: OrganizationDto[];
    tour: any;
    tours: TourDto[];

    constructor(private $scope: IEditTourScope,
        private $window: angular.IWindowService,
        private toursResource: toursResource,
        private notificationService: notificationService,
        private modalWindowService: modalWindowService,
        private $translate: any) {
        this.loadTours();
    }

    submit(): void {
        if (!this.$scope.editTourForm.$valid)
            return;

        this.toursResource.update(this.tour).then((result) => {
            this.tour = result.data;
            this.notificationService.success("editTour");
            this.$scope.editTourForm.$setPristine();
        }, (error) => {
            this.notificationService.error(error.data);
        });
    }

    onTourSelect(item): void {
        this.$scope.editTourForm.$setPristine();
    }

    deleteTourWithConfirmation() {
        if (this.tours.length <= 1) {
            this.modalWindowService.show("tours.cannotDeleteLastTourTitle",
                "tours.cannotDeleteLastTourMsg", () => { }, () => { });
        } else {
            this.modalWindowService.show("common.deleteConfirmTitle",
                "common.deleteConfirmContent", () => { this.deleteTour(); }, () => { });
        }
    }

    private deleteTour() {
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

    private loadTours() {
        this.toursResource.getList().then(response => {
            this.tours = response.data;
            this.tour = this.tours[0];
        });
    }

}

export = ToursEditController;