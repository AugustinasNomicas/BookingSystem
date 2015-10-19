/// <reference path="../../../../../typings/tsd.d.ts" />

import vCrudGridController = require("shared/directives/vCrudGrid/vcrudgrid.controller");


class vCrudDirective implements angular.IDirective {
    //	'A' - only matches attribute name
    //	'E' - only matches element name
    //	'C' - only matches class name
    restrict = 'A';
    // Don't replace the element that contains the attribute
    //replace = false;
    // scope = false, parent scope
    // scope = true, get new scope
    // scope = {..}, isolated scope
    scope = {
        columnButtonClick: "&",    // method binding
        initialized: "&", // method binding
    };
    bindToController = {
        allItems:  '=items'
    };
    // view
    templateUrl = '/app/shared/directives/vCrudGrid/vCrudGrid.view.html';
    // controller
    controller = vCrudGridController;
    controllerAs = "itemsCtrl";

    public link = (scope: angular.IScope, element: angular.IAugmentedJQuery, attrs: angular.IAttributes, ctrl: vCrudGridController) => {
        ctrl.link(attrs);
    }

    static factory(): angular.IDirectiveFactory {
        const directive = () => new vCrudDirective();
        return directive;
    }
}

export = vCrudDirective;
