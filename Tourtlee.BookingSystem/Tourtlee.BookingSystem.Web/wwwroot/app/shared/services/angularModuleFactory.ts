"use strict";

import {ModalWindowService} from "./modalWindowService";
import {NotificationService} from "./notificationService";

export class AngularModuleFactory {
    static factory(moduleName: string, translationsPart: string): angular.IModule {
        var defaultRequiredModules = ["mgcrea.ngStrap", "angular-loading-bar", "ngAnimate", "toastr",
            "ui.bootstrap", "pascalprecht.translate", 'ui.select', 'ngSanitize', 'ui.validate', 'ngMessages'];

        var module = angular.module(moduleName, defaultRequiredModules);

        module.service("ModalWindowService", ModalWindowService);
        module.service("notificationService", NotificationService);


        module.config(['$logProvider', $logProvider => {
            $logProvider.debugEnabled(true);
        }]);

        module.config(["$translateProvider", $translateProvider => {
            $translateProvider
                .useStaticFilesLoader({
                    prefix: `api/translations/${translationsPart}/`,
                    suffix: ""
                })
                .useSanitizeValueStrategy("escape")
                .preferredLanguage("en");
        }]);

        module.config(['toastrConfig', toastrConfig => {
            angular.extend(toastrConfig, {
                "showDuration": "100",
                "hideDuration": "100",
                "timeOut": "2000",
                "positionClass": "toast-bottom-right",
                "extendedTimeOut": "5000"
            });
        }]);

        return module;
    }
}