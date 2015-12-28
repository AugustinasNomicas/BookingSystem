/// <reference path="../../../../../typings/tsd.d.ts" />
"use strict";

import {ToursResource} from "../../../manage/tours/tours.resource";
import {TourSelectorItemDto} from "../../../manage/tours/dto/tourSelectorItemDto";

export class TourSelectorController {
    static $inject: string[] = ["$translate", "ToursResource"];

    idTour: string;
    tourSelectorItems: TourSelectorItemDto[];

    constructor(private $translate: any,
       private toursResource: ToursResource) {
        toursResource.getTourSelectorItems().then((result) => {
            this.tourSelectorItems = result.data;
        });
    }

    link(attrs: angular.IAttributes) {
    }
    
};