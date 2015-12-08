/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

export class OrganizationsController {
    static $inject: string[] = ["$scope", "$window"];
    organizationsList: OrganizationDto[];
    
    constructor(public $scope: angular.IScope, private $window: angular.IWindowService) {
        this.organizationsList = $window["organizationsConfig"]["organizationsList"];
    }
}

