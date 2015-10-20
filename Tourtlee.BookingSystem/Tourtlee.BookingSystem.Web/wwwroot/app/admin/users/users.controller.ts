/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/userlistitemdto.ts" />
"use strict";

class usersController {
    static $inject: string[] = ["$scope", "$window"];
    vm = this;
    public usersList: UserListItemDto[];

    constructor(public $scope: angular.IScope, private $window: angular.IWindowService) {
        this.usersList = $window["usersConfig"]["usersList"];
    }

}

export = usersController;