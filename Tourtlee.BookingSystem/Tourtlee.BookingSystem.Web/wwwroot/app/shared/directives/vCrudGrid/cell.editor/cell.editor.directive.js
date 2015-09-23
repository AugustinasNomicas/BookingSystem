var controller = require("shared/directives/vCrudGrid/cell.editor/cell.editor.controller");
var vCellEditor = (function () {
    function vCellEditor() {
        //	'A' - only matches attribute name
        //	'E' - only matches element name
        //	'C' - only matches class name
        this.restrict = 'A';
        // Don't replace the element that contains the attribute
        this.replace = true;
        // scope = false, parent scope
        // scope = true, get new scope
        // scope = {..}, isolated scope
        this.scope = {
            column: "=",
            item: "=",
            keyUpEvent: "&",
        };
        // view
        this.templateUrl = '/app/shared/directives/vCrudGrid/cell.editor/cell.editor.view.html';
        // controller
        this.controller = controller;
        this.controllerAs = "cellEditorCtrl";
    }
    vCellEditor.factory = function () {
        var directive = function () { return new vCellEditor(); };
        return directive;
    };
    return vCellEditor;
})();
module.exports = vCellEditor;
