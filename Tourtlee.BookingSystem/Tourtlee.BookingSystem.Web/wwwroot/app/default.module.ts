/// <reference path="../../typings/tsd.d.ts" />
import angulaModuleFactory = require("./shared/services/angularmodulefactory");

export module Users {
    "use strict";
    var moduleName = "default";
    var translationsPart = "admin";

    var app = angulaModuleFactory.factory(moduleName, translationsPart);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}