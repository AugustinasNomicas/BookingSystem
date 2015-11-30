/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="tours.types.ts" />
/// <reference path="tours.resource.ts" />


"use strict";
import toursResource = require("./tours.resource");
import notificationService = require("../../shared/services/notificationservice");


class ToursController {
    static $inject: string[] = ["$scope", "$window", "ToursResource",
        "notificationService", "$templateCache"];
    private vm = this;

    tours: TourDto[];

    constructor(private $scope: IEditTourScope,
        private $window: angular.IWindowService,
        private toursResource: toursResource,
        private notificationService: notificationService,
        private $templateCache: any) {
        this.loadTours();
    }

    private loadTours() {
        this.toursResource.getList().then(response => {
            this.tours = response.data;
        });
    }

}

export = ToursController;