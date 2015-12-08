/// <reference path="../../typings/tsd.d.ts" />
"use strict";

import {AngularModuleFactory} from "./shared/services/angularModuleFactory";

export module Default {
    "use strict";
    var moduleName = "default";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}