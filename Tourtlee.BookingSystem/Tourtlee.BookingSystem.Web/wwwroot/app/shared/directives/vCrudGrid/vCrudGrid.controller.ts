/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../interfaces/icrudresource.ts" />

"use strict";

import organizationsResource = require("../../../admin/resources/organizationsResource");
import modalWindowService = require("../../services/modalWindowService");
import notificationService = require("../../services/notificationService");

class vCrudGridController {
    static $inject: string[] = ["$injector", "modalWindowService", "notificationService", "$translate"];

    columnsDefinition: any[]; // TODO: create type for column definition
    allItems: any[];
    newItem: any; // item beeing added
    loading: boolean; // Indicates if the view is being loaded
    addMode: boolean; // Indicates if the view is in add mode
    orderByColumn: string;  // The column used for ordering
    orderByReverse: boolean;
    filterText: string;

    private resource: ICrudResource;
    private idBinding: string;
    private idDefaultValue: string;

    constructor(private $injector: angular.auto.IInjectorService,
        private modalWindowService: modalWindowService,
        private notificationService: notificationService,
        private $translate: any) {

    }

    link(attrs: angular.IAttributes) {
        this.resource = <organizationsResource>this.$injector.get(attrs["resource"]);
        this.idBinding = attrs["idBinding"];
        this.idDefaultValue = attrs["idDefaultValue"];
        this.columnsDefinition = angular.fromJson(attrs["columnsDefinition"]);
        this.getAllItems();
    }

    toggleAddMode() {
        this.addMode = !this.addMode;

        // Empty new item
        this.newItem = {};

        // Set a default id or the validation will crash
        this.newItem[this.idBinding] = this.idDefaultValue;
        this.newItem.hasErrors = !this.isValid(this.newItem);
    }

    toggleEditMode(item: any) {
        item.editMode = !item.editMode;

        if (!item.editMode) {
            // Undo changes
            this.restoreServerValues(item);
        } else {
            // save server name to restore it if the user cancel edition
            item.serverValues = angular.toJson(item);

            // Set edit mode = false and restore the name for the rest of items in edit mode 
            // (there should be only one)
            this.allItems.forEach((i) => {
                // item is not the item being edited now and it is in edit mode
                if (item[this.idBinding] !== i[this.idBinding] && i.editMode) {
                    // Save current editing values 
                    this.updateItem(i);
                }
            });
        }
    }

    updateModeKeyUp = (args, item) => {
        // if key is enter
        if (args.keyCode === 13) {
            // update
            this.updateItem(item);
            // remove focus
            args.target.blur();
            item.editMode = false;
        }
    };

    createModeKeyUp = (args, item) => {
        // if key is enter
        if (args.keyCode === 13) {
            // create
            this.createItem(item);
            // remove focus
            args.target.blur();
            this.addMode = false;
        }
    };

    updateItem(item) {
        if (this.isValid(item)) {
            item.editMode = false;

            // Only update if there are changes
            if (this.isDirty(item)) {
                this.resource.put(item).success((r) => {
                    //    // Refresh item with server values
                    this.copyItem(r, item);
                    this.notificationService.successUpdate();
                }).error((r) => {
                    this.notificationService.errorUpdate(r);
                    this.restoreServerValues(item);
                    item.editMode = true;
                });
            }
        }
    }


    createItem(item) {
        if (this.isValid(item)) {
            this.resource.post(item).success((createdItem) => {
                this.allItems.unshift(createdItem);
                this.addMode = false;
                this.notificationService.successUpdate();
            }).error((r) => {
                this.notificationService.errorUpdate(r);
            });
        }
    }

    deleteItemWithConfirmation(item) {
        this.$translate(["common.deleteConfirmTitle", "common.deleteConfirmContent"]).then((t) => {
            const title = t.common.deleteConfirmTitle;
            const msg = t.common.deleteConfirmContent;
            this.modalWindowService.show(title, msg, () => { this.deleteItem(item); }, () => { });
        });
    }

    clearFilter() {
        this.filterText = "";
    }

    setOrderByColumn(column) {
        if (this.orderByColumn === column) {
            // change order
            this.orderByReverse = !this.orderByReverse;
        } else {
            // order using new column
            this.orderByColumn = column;
            this.orderByReverse = false;
        }

        this.applyOrder();
    }

    private deleteItem(item) {
        this.resource.delete(item[this.idBinding]).success(() => {
            var index = this.allItems.indexOf(item);
            this.allItems.splice(index, 1);
            this.notificationService.successUpdate();
        }).error((e) => {
            this.notificationService.errorUpdate(e);
        });
    }

    private getAllItems() {
        this.loading = true;

        this.resource.getList().success(organizations => {
            this.allItems = organizations;
        }).finally(() => {
            this.loading = false;
        }).catch((): void => {
            this.notificationService.error("Failed to get data");
        });
    }

    private applyOrder() {
        this.allItems.sort((a, b) => {
            var comparisonResult = 0;

            var aField = a[this.orderByColumn];
            var bField = b[this.orderByColumn];

            if (aField === null) aField = "";
            if (bField === null) bField = "";


            if (aField < bField) comparisonResult = -1;
            if (aField > bField) comparisonResult = 1;

            if (this.orderByReverse) {
                comparisonResult = comparisonResult * (-1);
            }

            return comparisonResult;
        });
    }

    private isValid(item) {
        var isValid = true;

        // validate all columns
        this.columnsDefinition.forEach(column => {
            if (isValid) {

                // required validation
                if (column.required === "true") {
                    isValid = item[column.binding] != undefined;
                }
            }

        });

        return isValid;
    }

    private isDirty(item) {
        var serverItem = angular.fromJson(item.serverValues);

        var isDirty = false;

        this.columnsDefinition.forEach(column => {
            if (!isDirty && // short circuit if item is dirty
            (item[column.binding] !== serverItem[column.binding])) {
                isDirty = true;
            }
        });

        return isDirty;
    }

    private restoreServerValues(item) {
        var serverItem = angular.fromJson(item.serverValues);
        this.copyItem(serverItem, item);
        this.columnsDefinition.forEach(column => {
            item[column.binding] = serverItem[column.binding];
        });
    }

    private copyItem(itemSource, itemTarget) {
        this.columnsDefinition.forEach(column => {
            itemTarget[column.binding] = itemSource[column.binding];
        });
    }


};


export = vCrudGridController