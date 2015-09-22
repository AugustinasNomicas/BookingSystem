/// <reference path="../../../../typings/tsd.d.ts" />

class vAdminMenu implements angular.IDirective {
    restrict = 'E';
    templateUrl = 'app/admin/views/_menu.html';
    replace = true;
    private _scope;

    constructor(private $location: angular.ILocationService) {
    }

    link = (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes, ctrl: any) => {

    }

    static factory(): angular.IDirectiveFactory {
        const directive = ($location: angular.ILocationService) => new vAdminMenu($location);
        directive.$inject = ['$location'];
        return directive;
    }

}

export = vAdminMenu