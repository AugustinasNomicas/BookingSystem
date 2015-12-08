/// <reference path="../../typings/tsd.d.ts" />
"use strict";
var angularModuleFactory_1 = require("./shared/services/angularModuleFactory");
var Default;
(function (Default) {
    "use strict";
    var moduleName = "default";
    var translationsPart = "admin";
    var app = angularModuleFactory_1.AngularModuleFactory.factory(moduleName, translationsPart);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Default = exports.Default || (exports.Default = {}));
