/// <reference path="../../../../typings/tsd.d.ts" />

module admin {
    'use strict';

    export class OrganizationCtrl {
        private organizations;
        constructor() {
            this.organizations = {
                name: "test"
            };
            alert("test");
        }
    }
}