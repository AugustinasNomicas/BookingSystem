/// <reference path="../../../../typings/tsd.d.ts" />
'use strict';

class OrganizationCtrl {
    private organizations;

    constructor() {
        this.organizations = {
            name: "test"
        };
        alert("test");
    }
}

export = OrganizationCtrl;