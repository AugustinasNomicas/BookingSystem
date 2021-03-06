/// <reference path="../../../../../typings/tsd.d.ts" />
"use strict";
export class FormGroupValidationController {
    static $inject: string[] = ["$scope"];

    field = this.$scope.field;

    constructor(private $scope: any) {

    }

    getValidationClass() {
        if (!this.canBeValidated()) return '';

        if (this.isValid()) return 'has-success';

        return 'has-error';
    }

    private canBeValidated() {
        return (this.$scope.form[this.field].$dirty || this.$scope.form.$submitted)
            && !this.$scope.form.$pristine;
    }

    private isValid() {
        return this.$scope.form[this.field].$valid;
    }
}
