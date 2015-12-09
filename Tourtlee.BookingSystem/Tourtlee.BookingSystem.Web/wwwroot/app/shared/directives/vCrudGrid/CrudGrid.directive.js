/// <reference path="../../../../../typings/tsd.d.ts" />
var CrudGrid_controller_1 = require("./CrudGrid.controller");
var CrudGridDirective = (function () {
    function CrudGridDirective() {
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
            initialized: "&" // method binding
        };
        this.bindToController = {
            allItems: '=items'
        };
        // view
        this.templateUrl = '/app/shared/directives/vCrudGrid/CrudGrid.view.html';
        // controller
        this.controller = CrudGrid_controller_1.CrudGridController;
        this.controllerAs = "itemsCtrl";
        this.link = function (scope, element, attrs, ctrl) {
            ctrl.link(attrs);
        };
    }
    CrudGridDirective.factory = function () {
        var directive = function () { return new CrudGridDirective(); };
        return directive;
    };
    return CrudGridDirective;
})();
exports.CrudGridDirective = CrudGridDirective;
