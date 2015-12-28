/// <reference path="../../../../../typings/tsd.d.ts" />
var TourSelector_controller_1 = require("./TourSelector.controller");
var TourSelectorDirective = (function () {
    function TourSelectorDirective() {
        //	'A' - only matches attribute name
        //	'E' - only matches element name
        //	'C' - only matches class name
        this.restrict = 'A';
        this.bindToController = {
            ngModel: '=',
            ngChange: '&'
        };
        this.scope = {};
        // view
        this.templateUrl = '/app/shared/directives/tourSelector/TourSelector.view.html';
        // controller
        this.controller = TourSelector_controller_1.TourSelectorController;
        this.controllerAs = "tourSelectorCtrl";
        this.link = function (scope, element, attrs, ctrl) {
            ctrl.link(attrs);
        };
    }
    TourSelectorDirective.factory = function () {
        var directive = function () { return new TourSelectorDirective(); };
        return directive;
    };
    return TourSelectorDirective;
})();
exports.TourSelectorDirective = TourSelectorDirective;
