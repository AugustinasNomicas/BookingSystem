var modalWindowService = require("./modalwindowservice");
var notificationService = require("./notificationService");
var angulaModuleFactory = (function () {
    function angulaModuleFactory() {
    }
    angulaModuleFactory.factory = function (moduleName, translationsPart) {
        var defaultRequiredModules = ["mgcrea.ngStrap", "angular-loading-bar", "ngAnimate", "toastr",
            "ui.bootstrap", "pascalprecht.translate", 'ui.select', 'ngSanitize', 'ui.validate', 'ngMessages'];
        var module = angular.module(moduleName, defaultRequiredModules);
        module.service("modalWindowService", modalWindowService);
        module.service("notificationService", notificationService);
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
    return angulaModuleFactory;
})();
module.exports = angulaModuleFactory;
