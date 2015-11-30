/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="tours.types.ts" />
/// <reference path="tours.resource.ts" />
"use strict";
var ToursController = (function () {
    function ToursController($scope, $window, toursResource, notificationService, $templateCache) {
        this.$scope = $scope;
        this.$window = $window;
        this.toursResource = toursResource;
        this.notificationService = notificationService;
        this.$templateCache = $templateCache;
        this.vm = this;
        this.loadTours();
    }
    ToursController.prototype.loadTours = function () {
        var _this = this;
        this.toursResource.getList().then(function (response) {
            _this.tours = response.data;
        });
    };
    ToursController.$inject = ["$scope", "$window", "ToursResource",
        "notificationService", "$templateCache"];
    return ToursController;
})();
module.exports = ToursController;
