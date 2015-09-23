/// <reference path="../../../../../typings/tsd.d.ts" />

import controller = require("shared/directives/vCrudGrid/vcrudgrid.controller");


class vCrudDirective implements angular.IDirective {
    //	'A' - only matches attribute name
    //	'E' - only matches element name
    //	'C' - only matches class name
    restrict = 'A';
    // Don't replace the element that contains the attribute
    replace = false;
    // scope = false, parent scope
    // scope = true, get new scope
    // scope = {..}, isolated scope
    scope = {
        columnButtonClick: "&",    // method binding
        initialized: "&", // method binding
        serverUrl: "@serverUrl"  // one way binding
    }
    // view
    templateUrl = '/app/shared/directives/vCrudGrid/vCrudGrid.view.html';
    // controller
    controller = controller;
    controllerAs = "itemsCtrl";

    static factory(): angular.IDirectiveFactory {
        const directive = () => new vCrudDirective();
        return directive;
    }
}

export = vCrudDirective;
