"use strict";
var modalWindowService_1 = require("./modalWindowService");
var notificationService_1 = require("./notificationService");
var AngularModuleFactory = (function () {
    function AngularModuleFactory() {
    }
    AngularModuleFactory.factory = function (moduleName, translationsPart) {
        var defaultRequiredModules = ["mgcrea.ngStrap", "angular-loading-bar", "ngAnimate", "toastr",
            "ui.bootstrap", "pascalprecht.translate", 'ui.select', 'ngSanitize', 'ui.validate', 'ngMessages',
            'smart-table'];
        var module = angular.module(moduleName, defaultRequiredModules);
        module.service("ModalWindowService", modalWindowService_1.ModalWindowService);
        module.service("notificationService", notificationService_1.NotificationService);
        module.config(['$logProvider', function ($logProvider) {
                $logProvider.debugEnabled(true);
            }]);
        module.config(["$translateProvider", function ($translateProvider) {
                $translateProvider
                    .useStaticFilesLoader({
                    prefix: "api/translations/" + translationsPart + "/",
                    suffix: ""
                })
                    .useSanitizeValueStrategy("escape")
                    .preferredLanguage("en");
            }]);
        module.config(['toastrConfig', function (toastrConfig) {
                angular.extend(toastrConfig, {
                    "showDuration": "100",
                    "hideDuration": "100",
                    "timeOut": "2000",
                    "positionClass": "toast-bottom-right",
                    "extendedTimeOut": "5000"
                });
            }]);
        return module;
    };
    return AngularModuleFactory;
})();
exports.AngularModuleFactory = AngularModuleFactory;
