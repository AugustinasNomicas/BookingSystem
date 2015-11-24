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
    editTour: any;

    constructor(private $scope: IEditTourScope,
        private $window: angular.IWindowService,
        private toursResource: toursResource,
        private notificationService: notificationService,
        private $templateCache: any) {

        this.editTour = $window["toursConfig"]["editTour"];
    }

    submit(): void {
        if (!this.$scope.editTourForm.$valid)
            return;

        this.toursResource.update(this.editTour).then((result) => {
            this.editTour = result.data;
            this.notificationService.success("editTour");
        }, (error) => {
            this.notificationService.error(error.data);
        });
    }

}

export = ToursEditController;