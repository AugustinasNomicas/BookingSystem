/// <reference path="../../typings/tsd.d.ts" />
var angulaModuleFactory = require("./shared/services/angularmodulefactory");
var Users;
(function (Users) {
    "use strict";
    var moduleName = "default";
    var translationsPart = "admin";
    var app = angulaModuleFactory.factory(moduleName, translationsPart);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Users = exports.Users || (exports.Users = {}));
