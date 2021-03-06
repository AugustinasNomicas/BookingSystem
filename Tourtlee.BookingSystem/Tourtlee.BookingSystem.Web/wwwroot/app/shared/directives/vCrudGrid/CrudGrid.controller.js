/// <reference path="../../../../../typings/tsd.d.ts" />
/// <reference path="../../interfaces/icrudresource.ts" />
"use strict";
var CrudGridController = (function () {
    function CrudGridController($injector, modalWindowService, notificationService, $translate) {
        var _this = this;
        this.$injector = $injector;
        this.modalWindowService = modalWindowService;
        this.notificationService = notificationService;
        this.$translate = $translate;
        this.updateModeKeyUp = function (args, item) {
            // if key is enter
            if (args.keyCode === 13) {
                // update
                _this.updateItem(item);
                // remove focus
                args.target.blur();
                item.editMode = false;
            }
        };
        this.createModeKeyUp = function (args, item) {
            // if key is enter
            if (args.keyCode === 13) {
                // create
                _this.createItem(item);
                // remove focus
                args.target.blur();
                _this.addMode = false;
            }
        };
    }
    CrudGridController.prototype.link = function (attrs) {
        this.idBinding = attrs["idBinding"];
        this.idDefaultValue = attrs["idDefaultValue"];
        this.readonly = attrs["readonly"];
        this.columnsDefinition = angular.fromJson(attrs["columnsDefinition"]);
        this.crudResource = this.$injector.get(attrs["crudResource"]);
        if (!this.allItems)
            this.getAllItems();
    };
    CrudGridController.prototype.toggleAddMode = function () {
        this.addMode = !this.addMode;
        // Empty new item
        this.newItem = {};
        // Set a default id or the validation will crash
        this.newItem[this.idBinding] = this.idDefaultValue;
        this.newItem.hasErrors = !this.isValid(this.newItem);
    };
    CrudGridController.prototype.toggleEditMode = function (item) {
        var _this = this;
        if (this.readonly)
            return;
        item.editMode = !item.editMode;
        if (!item.editMode) {
            // Undo changes
            this.restoreServerValues(item);
        }
        else {
            // save server name to restore it if the user cancel edition
            item.serverValues = angular.toJson(item);
            // Set edit mode = false and restore the name for the rest of items in edit mode 
            // (there should be only one)
            this.allItems.forEach(function (i) {
                // item is not the item being edited now and it is in edit mode
                if (item[_this.idBinding] !== i[_this.idBinding] && i.editMode) {
                    // Save current editing values 
                    _this.updateItem(i);
                }
            });
        }
    };
    CrudGridController.prototype.updateItem = function (item) {
        var _this = this;
        if (this.isValid(item)) {
            item.editMode = false;
            // Only update if there are changes
            if (this.isDirty(item)) {
                var promise = this.crudResource.update(item);
                promise.error(function (r) {
                    _this.notificationService.errorUpdate(r);
                    _this.restoreServerValues(item);
                    item.editMode = true;
                }).success(function (r) {
                    //    Refresh item with server values
                    _this.copyItem(r, item);
                    _this.notificationService.successUpdate();
                });
                return promise;
            }
        }
    };
    CrudGridController.prototype.createItem = function (item) {
        var _this = this;
        if (this.isValid(item)) {
            var promise = this.crudResource.create(item);
            promise.error(function (r) {
                _this.notificationService.errorUpdate(r);
            }).success(function (createdItem) {
                _this.notificationService.successUpdate();
                _this.allItems.unshift(createdItem);
                _this.addMode = false;
            });
            return promise;
        }
    };
    CrudGridController.prototype.deleteItemWithConfirmation = function (item) {
        var _this = this;
        this.modalWindowService.show("common.deleteConfirmTitle", "common.deleteConfirmContent", function () { _this.deleteItem(item); }, function () { });
    };
    CrudGridController.prototype.clearFilter = function () {
        this.filterText = "";
    };
    CrudGridController.prototype.setOrderByColumn = function (column) {
        if (this.orderByColumn === column) {
            // change order
            this.orderByReverse = !this.orderByReverse;
        }
        else {
            // order using new column
            this.orderByColumn = column;
            this.orderByReverse = false;
        }
        this.applyOrder();
    };
    CrudGridController.prototype.deleteItem = function (item) {
        var _this = this;
        var id = item[this.idBinding];
        this.crudResource.delete(id).success(function () {
            var index = _this.allItems.indexOf(item);
            _this.allItems.splice(index, 1);
            _this.notificationService.successUpdate();
        }).error(function () {
            _this.notificationService.errorUpdate("Failed to update");
        });
    };
    CrudGridController.prototype.getAllItems = function () {
        var _this = this;
        this.crudResource.getList().success(function (data) {
            _this.allItems = data;
        }).error(function () {
            _this.notificationService.error("Couldn't load users");
        });
    };
    CrudGridController.prototype.applyOrder = function () {
        var _this = this;
        this.allItems.sort(function (a, b) {
            var comparisonResult = 0;
            var aField = a[_this.orderByColumn];
            var bField = b[_this.orderByColumn];
            if (aField === null)
                aField = "";
            if (bField === null)
                bField = "";
            if (aField < bField)
                comparisonResult = -1;
            if (aField > bField)
                comparisonResult = 1;
            if (_this.orderByReverse) {
                comparisonResult = comparisonResult * (-1);
            }
            return comparisonResult;
        });
    };
    CrudGridController.prototype.isValid = function (item) {
        var isValid = true;
        // validate all columns
        this.columnsDefinition.forEach(function (column) {
            if (isValid) {
                // required validation
                if (column.required === "true") {
                    isValid = item[column.binding] != undefined;
                }
            }
        });
        return isValid;
    };
    CrudGridController.prototype.isDirty = function (item) {
        var serverItem = angular.fromJson(item.serverValues);
        var isDirty = false;
        this.columnsDefinition.forEach(function (column) {
            if (!isDirty &&
                (item[column.binding] !== serverItem[column.binding])) {
                isDirty = true;
            }
        });
        return isDirty;
    };
    CrudGridController.prototype.restoreServerValues = function (item) {
        var serverItem = angular.fromJson(item.serverValues);
        this.copyItem(serverItem, item);
        this.columnsDefinition.forEach(function (column) {
            item[column.binding] = serverItem[column.binding];
        });
    };
    CrudGridController.prototype.copyItem = function (itemSource, itemTarget) {
        this.columnsDefinition.forEach(function (column) {
            itemTarget[column.binding] = itemSource[column.binding];
        });
    };
    CrudGridController.$inject = ["$injector", "ModalWindowService", "notificationService", "$translate"];
    return CrudGridController;
})();
exports.CrudGridController = CrudGridController;
;
