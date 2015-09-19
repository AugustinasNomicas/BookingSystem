/// <reference path="../../../../typings/tsd.d.ts" />
var vAdminMenu = (function () {
    function vAdminMenu($location) {
        this.$location = $location;
        this.restrict = 'E';
        //    require = 'ngModel';
        this.templateUrl = 'app/admin/views/menu.html';
        this.replace = true;
        this.link = function (scope, element, attrs, ctrl) {
            console.log("hello from menu");
        };
    }
    vAdminMenu.factory = function () {
        var directive = function ($location) { return new vAdminMenu($location); };
        directive.$inject = ['$location'];
        return directive;
    };
    return vAdminMenu;
})();
module.exports = vAdminMenu;
