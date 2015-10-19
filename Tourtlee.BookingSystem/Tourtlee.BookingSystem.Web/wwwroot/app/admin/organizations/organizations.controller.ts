/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";

class organizationsController {
    static $inject: string[] = ["$scope", "$window"];
    public organizationsList: OrganizationDto[];
    
    constructor(public $scope: angular.IScope, private $window: angular.IWindowService) {
        this.organizationsList = $window["organizationsList"];
    }

}

export = organizationsController;