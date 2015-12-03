/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="tours.types.ts" />
"use strict";
import toursResource = require("./tours.resource");
import notificationService = require("../../shared/services/notificationservice");

class ToursEditController {
    static $inject: string[] = ["$scope", "$window", "ToursResource",
        "notificationService", "$templateCache"];
    private vm = this;

    organizations: OrganizationDto[];
    tour: any;
    tours: TourDto[];

    constructor(private $scope: IEditTourScope,
        private $window: angular.IWindowService,
        private toursResource: toursResource,
        private notificationService: notificationService,
        private $templateCache: any) {
        this.loadTours();
    }

    submit(): void {
        if (!this.$scope.editTourForm.$valid)
            return;

        this.toursResource.update(this.tour).then((result) => {
            this.tour = result.data;
            this.notificationService.success("editTour");
        }, (error) => {
            this.notificationService.error(error.data);
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