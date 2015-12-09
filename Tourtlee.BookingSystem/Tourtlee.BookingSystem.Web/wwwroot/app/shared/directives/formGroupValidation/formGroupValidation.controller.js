/// <reference path="../../../../../typings/tsd.d.ts" />
"use strict";
var FormGroupValidationController = (function () {
    function FormGroupValidationController($scope) {
        this.$scope = $scope;
        this.field = this.$scope.field;
    }
    FormGroupValidationController.prototype.getValidationClass = function () {
        if (!this.canBeValidated())
            return '';
        if (this.isValid())
            return 'has-success';
        return 'has-error';
    };
    FormGroupValidationController.prototype.canBeValidated = function () {
        return (this.$scope.form[this.field].$dirty || this.$scope.form.$submitted)
            && !this.$scope.form.$pristine;
    };
    FormGroupValidationController.prototype.isValid = function () {
        return this.$scope.form[this.field].$valid;
    };
    FormGroupValidationController.$inject = ["$scope"];
    return FormGroupValidationController;
})();
exports.FormGroupValidationController = FormGroupValidationController;
