/// <reference path="../../../../typings/tsd.d.ts" />

import vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
import vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");

import modalWindowService = require("../../shared/services/modalwindowservice");
import notificationService = require("../../shared/services/notificationService");


import organizationsController = require("./organizations.controller");
import organizationsResource = require("./organizations.resource");
import organizationsService = require("./organizations.service");

export module Organizations {
    "use strict";
    var moduleName = "organizations";
    var translationsPart = "admin";

    var app = angular.module(moduleName,
        ["mgcrea.ngStrap", "angular-loading-bar", "ngAnimate", "toastr",
            "ui.bootstrap", "pascalprecht.translate"]);

    app.directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());        


    app.controller("OrganizationsController", organizationsController);
    app.service("organizationsResource", organizationsResource);
    app.service("organizationsService", organizationsService);
    
    app.service("modalWindowService", modalWindowService);
    app.service("notificationService", notificationService);

    app.config(['$logProvider', $logProvider => {
        $logProvider.debugEnabled(true);
    }]);

    app.config(["$translateProvider", $translateProvider => {
        $translateProvider
            .useStaticFilesLoader({
                prefix: `api/translations/${translationsPart}/`,
                suffix: ""
            })
            .useSanitizeValueStrategy("escape")
            .preferredLanguage("en");
    }]);

    app.config(['toastrConfig', toastrConfig => {
        angular.extend(toastrConfig, {
            "showDuration": "100",
            "hideDuration": "100",
            "timeOut": "2000",
            "positionClass": "toast-bottom-right",
            "extendedTimeOut": "5000"
        });
    }]);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}