/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';
var vSample = (function () {
    function vSample($location) {
        this.$location = $location;
        this.restrict = 'E';
        //    require = 'ngModel';
        //    templateUrl = 'directives/sample.html';
        this.replace = true;
        this.link = function (scope, element, attrs, ctrl) {
            console.log("hello from sample");
        };
    }
    vSample.prototype.routeChangeStart = function () {
    };
    vSample.factory = function () {
        var directive = function ($location) { return new vSample($location); };
        directive.$inject = ['$location'];
        return directive;
    };
    return vSample;
})();
module.exports = vSample;
