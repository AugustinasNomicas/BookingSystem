/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="dto/userlistitemdto.ts" />
"use strict";

import {UserListItemDto} from "./dto/UserListItemDto";


export class UsersController {
    static $inject: string[] = ["$scope", "$window", '$translate'];
    vm = this;
    usersList: UserListItemDto[];

    constructor(public $scope: angular.IScope,
        private $window: angular.IWindowService, private $translate: any) {
        this.usersList = $window["usersConfig"]["usersList"];
    }
}

