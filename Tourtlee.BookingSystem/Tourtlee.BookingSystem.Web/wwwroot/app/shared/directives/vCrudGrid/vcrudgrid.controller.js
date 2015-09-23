/// <reference path="../../../../../typings/tsd.d.ts" />
'use strict';
var vCrudGridController = (function () {
    function vCrudGridController(organizationsResource, toastr) {
        var _this = this;
        this.organizationsResource = organizationsResource;
        this.toastr = toastr;
        this.updateModeKeyUp = function (args, item) {
            // if key is enter
            if (args.keyCode == 13) {
                // update
                //self.updateItem(item);
                // remove focus
                _this.requestSuccess();
                args.target.blur();
                item.editMode = false;
            }
            else {
            }
        };
        this.columnsDefinition = [];
        this.columnsDefinition.push({ header: "Id", binding: "IdOrganization", type: "disabled", required: "true" });
        this.columnsDefinition.push({ header: "Name", binding: "Name", type: "text", required: "true" });
        this.getAllItems();
    }
    vCrudGridController.prototype.toggleEditMode = function (item) {
        item.editMode = !item.editMode;
    };
    vCrudGridController.prototype.getAllItems = function () {
        var _this = this;
        this.loading = true;
        this.organizationsResource.getList().success(function (organizations) {
            _this.allItems = organizations;
        }).finally(function () {
            _this.loading = false;
        }).catch(function (r) {
            _this.requestError(r);
        });
    };
    vCrudGridController.prototype.requestError = function (error) {
        this.toastr.error(error);
    };
    ;
    vCrudGridController.prototype.requestSuccess = function () {
        this.toastr.success("Success!");
    };
    ;
    vCrudGridController.$inject = ['organizationsResource', 'toastr'];
    return vCrudGridController;
})();
module.exports = vCrudGridController;
