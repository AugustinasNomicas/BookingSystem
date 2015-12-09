'use strict';
import {CellEditorController} from "./cell.editor.controller";

export class CellEditorDirective implements angular.IDirective {
    //	'A' - only matches attribute name
    //	'E' - only matches element name
    //	'C' - only matches class name
    restrict = 'A';
    // Don't replace the element that contains the attribute
    replace = true;
    // scope = false, parent scope
    // scope = true, get new scope
    // scope = {..}, isolated scope
    scope = {
            column: "=",        // object binding
            item: "=",          // object binding
            keyUpEvent: "&"    // method binding
    };
    // view
    templateUrl = '/app/shared/directives/vCrudGrid/cell.editor/cell.editor.view.html';
    // controller
    controller = CellEditorController;
    controllerAs = "cellEditorCtrl";

    static factory(): angular.IDirectiveFactory {
        const directive = () => new CellEditorDirective();
        return directive;
    }
}
