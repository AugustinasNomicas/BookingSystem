/// <reference path="../../../../../typings/tsd.d.ts" />
"use strict";
var TourSelectorController = (function () {
    function TourSelectorController($translate, toursResource) {
        var _this = this;
        this.$translate = $translate;
        this.toursResource = toursResource;
        toursResource.getTourSelectorItems().then(function (result) {
            _this.tourSelectorItems = result.data;
        });
    }
    TourSelectorController.prototype.link = function (attrs) {
    };
    TourSelectorController.$inject = ["$translate", "ToursResource"];
    return TourSelectorController;
})();
exports.TourSelectorController = TourSelectorController;
;
