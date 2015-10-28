/// <reference path="../../../../../typings/tsd.d.ts" />
import formGroupValidationController = require("./formGroupValidation.controller");

"use strict";

interface Scope {
    field: string;
    form?: Object;
}

class formGroupValidationDirective implements angular.IDirective {
    require = '^form';
    restrict = 'A';

    scope: Scope;
    controller = formGroupValidationController;
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

    public link = (scope: any, element: angular.IAugmentedJQuery, attrs: angular.IAttributes,
        formCtrl: any) => {
        scope.form = formCtrl;
    }

    static factory(): angular.IDirectiveFactory {
        const directive = () => new formGroupValidationDirective();
        return directive;
    }
}

export = formGroupValidationDirective;