/// <reference path="../../../../typings/tsd.d.ts" />
var admin;
(function (admin) {
    'use strict';
    var OrganizationCtrl = (function () {
        function OrganizationCtrl() {
            this.organizations = {
                name: "test"
            };
            alert("test");
        }
        return OrganizationCtrl;
    })();
    admin.OrganizationCtrl = OrganizationCtrl;
})(admin || (admin = {}));
