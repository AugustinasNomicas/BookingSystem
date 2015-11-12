/// <reference path="../../../../typings/tsd.d.ts" />
var vCrudGrid = require("../../shared/directives/vCrudGrid/vCrudGrid.directive");
var vCellEditor = require("../../shared/directives/vCrudGrid/cell.editor/cell.editor.directive");
var angulaModuleFactory = require("../../shared/services/angularmodulefactory");
var organizationsController = require("./organizations.controller");
var organizationsResource = require("./organizations.resource");
var Organizations;
(function (Organizations) {
    "use strict";
    var moduleName = "organizations";
    var translationsPart = "admin";
    var app = angulaModuleFactory.factory(moduleName, translationsPart);
    app.directive("vCrudGrid", vCrudGrid.factory())
        .directive("vCellEditor", vCellEditor.factory());
    app.controller("OrganizationsController", organizationsController);
    app.service("organizationsResource", organizationsResource);
    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
})(Organizations = exports.Organizations || (exports.Organizations = {}));
