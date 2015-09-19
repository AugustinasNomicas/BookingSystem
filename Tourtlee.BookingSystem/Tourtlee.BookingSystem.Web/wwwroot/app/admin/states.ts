/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

class States {
    constructor(private $stateProvider: ng.ui.IStateProvider,
        private $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: angular.ILocationProvider) {

        $locationProvider.html5Mode(true);
        this.init();
    }

    private init(): void {
        this.$stateProvider.state("main", States.defaultState());
        this.$stateProvider.state("organizations", States.organizations());
        this.$urlRouterProvider.otherwise('/Admin/main');
    }

    private static defaultState(): ng.ui.IState {
        return {
            url: "/Admin/main",
            templateUrl: "/app/admin/views/main.html"
        }
    }

    private static organizations(): ng.ui.IState {
        return {
            url: "/Admin/organizations",
            templateUrl: "/app/admin/views/organizations.html"
        }
    }

}

export = States;