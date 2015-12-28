/// <reference path="../../../../../typings/tsd.d.ts" />

import {TourSelectorController} from "./TourSelector.controller";

export class TourSelectorDirective implements angular.IDirective {
    //	'A' - only matches attribute name
    //	'E' - only matches element name
    //	'C' - only matches class name
    restrict = 'A';

    bindToController = {
        ngModel: '=',
        ngChange: '&'
    };

    scope = {
    }

    // view
    templateUrl = '/app/shared/directives/tourSelector/TourSelector.view.html';
    // controller
    controller = TourSelectorController;
    controllerAs = "tourSelectorCtrl";

    link = (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes, ctrl: TourSelectorController) => {
        ctrl.link(attrs);
    }

    static factory(): angular.IDirectiveFactory {
        const directive = () => new TourSelectorDirective();
        return directive;
    }
}