/// <reference path="../../../../../typings/tsd.d.ts" />
"use strict";
var formGroupValidation_controller_1 = require("./formGroupValidation.controller");
var FormGroupValidationDirective = (function () {
    function FormGroupValidationDirective() {
        this.require = '^form';
        this.restrict = 'A';
        this.controller = formGroupValidation_controller_1.FormGroupValidationController;
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
    FormGroupValidationDirective.factory = function () {
        var directive = function () { return new FormGroupValidationDirective(); };
        return directive;
    };
    return FormGroupValidationDirective;
})();
exports.FormGroupValidationDirective = FormGroupValidationDirective;
