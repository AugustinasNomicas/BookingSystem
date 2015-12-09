/// <reference path="../../../../../typings/tsd.d.ts" />
"use strict";

import {FormGroupValidationController} from "./formGroupValidation.controller";

export interface IScope {
    field: string;
    form?: Object;
}

export class FormGroupValidationDirective implements angular.IDirective {
    require = '^form';
    restrict = 'A';

    scope: IScope;
    controller = FormGroupValidationController;
    controllerAs = 'vm';

    template = '<div class="has-feedback" ng-class="vm.getValidationClass()">' +
    '<ng-transclude></ng-transclude></div>';
    transclude = true;
    replace = true;

    constructor() {
        this.scope = {
            field: '@formGroupValidation'
        };
    }

    link = (scope: any, element: angular.IAugmentedJQuery, attrs: angular.IAttributes,
        formCtrl: any) => {
        scope.form = formCtrl;
    }

    static factory(): angular.IDirectiveFactory {
        const directive = () => new FormGroupValidationDirective();
        return directive;
    }
}