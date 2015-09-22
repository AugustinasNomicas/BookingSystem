/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';

class vSample implements angular.IDirective {
    restrict = 'E';
//    require = 'ngModel';
//    templateUrl = 'directives/sample.html';
    replace = true;
    private _scope;

    constructor(private $location: angular.ILocationService) {
    }

    link = (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes, ctrl: any) => {
        console.log("hello from vSample");
    }


    private routeChangeStart(): void {
    }

    static factory(): angular.IDirectiveFactory {
        const directive = ($location: angular.ILocationService) => new vSample($location);
        directive.$inject = ['$location'];
        return directive;
    }

}

export = vSample