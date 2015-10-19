/// <reference path="../../../../../typings/tsd.d.ts" />
var vCrudGridController = require("shared/directives/vCrudGrid/vcrudgrid.controller");
var vCrudDirective = (function () {
    function vCrudDirective() {
        //	'A' - only matches attribute name
        //	'E' - only matches element name
        //	'C' - only matches class name
        this.restrict = 'A';
        // Don't replace the element that contains the attribute
        //replace = false;
        // scope = false, parent scope
        // scope = true, get new scope
        // scope = {..}, isolated scope
        this.scope = {
            columnButtonClick: "&",
            initialized: "&",
        };
        this.bindToController = {
            allItems: '=items'
        };
        // view
        this.templateUrl = '/app/shared/directives/vCrudGrid/vCrudGrid.view.html';
        // controller
        this.controller = vCrudGridController;
        this.controllerAs = "itemsCtrl";
        this.link = function (scope, element, attrs, ctrl) {
            ctrl.link(attrs);
        };
    }
    vCrudDirective.factory = function () {
        var directive = function () { return new vCrudDirective(); };
        return directive;
    };
    return vCrudDirective;
})();
module.exports = vCrudDirective;
