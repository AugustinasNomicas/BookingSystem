/// <reference path="../../../../../typings/tsd.d.ts" />
'use strict';

import OrganizationsResource = require("../../../admin/resources/organizationsResource");

class vCrudGridController {
    static $inject: string[] = ['organizationsResource', 'toastr'];

    public columnsDefinition: any[]; // TODO: create type for column definition
    public allItems: any[];
    public newItem: any[]; // item beeing added
    public loading: boolean; // Indicates if the view is being loaded
    public addMode: boolean; // Indicates if the view is in add mode
    public orderByColumn: string;  // The column used for ordering
    public orderByReverse: boolean;
    public filter: string;
    public filterText; string; // Written filter text, this is not the applied one (performance tunning)

    constructor(private organizationsResource: OrganizationsResource,
        private toastr: any) {
        this.columnsDefinition = [];
        this.columnsDefinition.push({ header: "Id", binding: "IdOrganization", type: "disabled", required: "true" });
        this.columnsDefinition.push({ header: "Name", binding: "Name", type: "text", required: "true" });
        this.getAllItems();
    }

    public toggleEditMode(item: any) {
        item.editMode = !item.editMode;
    }

    public updateModeKeyUp = (args, item) =>  {
        // if key is enter
        if (args.keyCode == 13) {
            // update
            //self.updateItem(item);
            // remove focus
            this.requestSuccess();
            args.target.blur();
            item.editMode = false;
        } else {
            //_updateItemThrottle.run(function () {
            //    // refresh validation
            //    $scope.$apply(function () {
            //        item.hasErrors = !_isValid(item);
            //    });
            //});
        }
    };

    private getAllItems() {
        this.loading = true;

        this.organizationsResource.getList().success(organizations => {
            this.allItems = organizations;
        }).finally(() => {
            this.loading = false;
        }).catch(r => {
            this.requestError(r);
        });
    }

    private requestError(error) {
        this.toastr.error(error);
    };

    private requestSuccess() {
        this.toastr.success("Success!");
    };


}

export = vCrudGridController