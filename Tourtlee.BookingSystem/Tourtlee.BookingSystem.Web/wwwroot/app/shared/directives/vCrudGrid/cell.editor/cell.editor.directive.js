'use strict';
var cell_editor_controller_1 = require("./cell.editor.controller");
var CellEditorDirective = (function () {
    function CellEditorDirective() {
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
            keyUpEvent: "&" // method binding
        };
        // view
        this.templateUrl = '/app/shared/directives/vCrudGrid/cell.editor/cell.editor.view.html';
        // controller
        this.controller = cell_editor_controller_1.CellEditorController;
        this.controllerAs = "cellEditorCtrl";
    }
    CellEditorDirective.factory = function () {
        var directive = function () { return new CellEditorDirective(); };
        return directive;
    };
    return CellEditorDirective;
})();
exports.CellEditorDirective = CellEditorDirective;
