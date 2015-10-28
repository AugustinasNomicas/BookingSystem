/// <reference path="../../../../../typings/tsd.d.ts" />
var formGroupValidationController = require("./formGroupValidation.controller");
"use strict";
var formGroupValidationDirective = (function () {
    function formGroupValidationDirective() {
        this.require = '^form';
        this.restrict = 'A';
        this.controller = formGroupValidationController;
        this.controllerAs = 'vm';
        this.template = '<div class="has-feedback" ng-class="vm.getValidationClass()">' +
            '<ng-transclude></ng-transclude></div>';
        this.transclude = true;
        this.replace = true;
        this.link = function (scope, element, attrs, formCtrl) {
            scope.form = formCtrl;
        };
        this.scope = {
            field: '@formGroupValidation'
        };
    }
    formGroupValidationDirective.factory = function () {
        var directive = function () { return new formGroupValidationDirective(); };
        return directive;
    };
    return formGroupValidationDirective;
})();
module.exports = formGroupValidationDirective;
