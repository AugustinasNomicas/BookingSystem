/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/userlistitemdto.ts" />
"use strict";

class usersController {
    static $inject: string[] = ["$scope", "$window", '$translate'];
    vm = this;
    public usersList: UserListItemDto[];

    constructor(public $scope: angular.IScope, private $window: angular.IWindowService, private $translate: any) {
        this.usersList = $window["usersConfig"]["usersList"];
    }
}

export = usersController;