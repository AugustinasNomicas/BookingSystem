/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

class States {
    constructor(private $stateProvider: ng.ui.IStateProvider,
        private $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: angular.ILocationProvider) {

        $locationProvider.html5Mode(false);
        this.init();
    }

    private init(): void {
        this.$stateProvider.state("main", States.defaultState());
        this.$stateProvider.state("organizations", States.organizations());
        this.$stateProvider.state("users", States.users());
        this.$urlRouterProvider.otherwise("/");
    }

    private static defaultState(): ng.ui.IState {
        return {
            url: "/",
            templateUrl: "/app/admin/views/main.html"
        }
    }

    private static organizations(): ng.ui.IState {
        return {
            url: "/organizations",
            templateUrl: "/app/admin/views/organizations.html"
        }
    }

    private static users(): ng.ui.IState {
        return {
            url: "/users",
            templateUrl: "/app/admin/views/users.html"
        }
    }

}

export = States;