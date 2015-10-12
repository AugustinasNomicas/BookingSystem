/// <reference path="../../../../typings/tsd.d.ts" />
var adminMenu = (function () {
    function adminMenu($location) {
        this.$location = $location;
        this.restrict = 'E';
        this.templateUrl = 'app/admin/components/adminMenu.html';
        this.replace = true;
        this.link = function (scope, element, attrs, ctrl) {
        };
    }
    adminMenu.factory = function () {
        var directive = function ($location) { return new adminMenu($location); };
        directive.$inject = ['$location'];
        return directive;
    };
    return adminMenu;
})();
module.exports = adminMenu;
