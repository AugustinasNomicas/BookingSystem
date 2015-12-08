/// <reference path="../../../../../typings/tsd.d.ts" />
"use strict";
var formGroupValidationController = (function () {
    function formGroupValidationController($scope) {
        this.$scope = $scope;
        this.field = this.$scope.field;
    }
    formGroupValidationController.prototype.getValidationClass = function () {
        if (!this.canBeValidated())
            return '';
        if (this.isValid())
            return 'has-success';
        return 'has-error';
    };
    formGroupValidationController.prototype.canBeValidated = function () {
        return (this.$scope.form[this.field].$dirty || this.$scope.form.$submitted)
            && !this.$scope.form.$pristine;
    };
    formGroupValidationController.prototype.isValid = function () {
        return this.$scope.form[this.field].$valid;
    };
    formGroupValidationController.$inject = ["$scope"];
    return formGroupValidationController;
})();
module.exports = formGroupValidationController;
