/// <reference path="../../../../../typings/tsd.d.ts" />
var controller = require("shared/directives/vCrudGrid/vcrudgrid.controller");
var vCrudDirective = (function () {
    function vCrudDirective() {
        //	'A' - only matches attribute name
        //	'E' - only matches element name
        //	'C' - only matches class name
        this.restrict = 'A';
        // Don't replace the element that contains the attribute
        this.replace = false;
        // scope = false, parent scope
        // scope = true, get new scope
        // scope = {..}, isolated scope
        this.scope = {
            columnButtonClick: "&",
            initialized: "&",
            serverUrl: "@serverUrl" // one way binding
        };
        // view
        this.templateUrl = '/app/shared/directives/vCrudGrid/vCrudGrid.view.html';
        // controller
        this.controller = controller;
        this.controllerAs = "itemsCtrl";
    }
    vCrudDirective.factory = function () {
        var directive = function () { return new vCrudDirective(); };
        return directive;
    };
    return vCrudDirective;
})();
module.exports = vCrudDirective;
