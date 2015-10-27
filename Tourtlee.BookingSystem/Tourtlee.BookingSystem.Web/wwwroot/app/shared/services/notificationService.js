var notificationService = (function () {
    function notificationService(toastr, $translate) {
        this.toastr = toastr;
        this.$translate = $translate;
    }
    notificationService.prototype.error = function (error) {
        this.toastr.error(error);
    };
    notificationService.prototype.errorUpdate = function (error) {
        var _this = this;
        this.$translate(["notifications.updateFailed"]).then(function (t) {
            _this.toastr.error(t["notifications.updateFailed"]);
        });
    };
    notificationService.prototype.successUpdate = function () {
        var _this = this;
        this.$translate(["notifications.successfullyUpdated"]).then(function (t) {
            _this.toastr.success(t["notifications.successfullyUpdated"]);
        });
    };
    notificationService.prototype.success = function (msg) {
        var _this = this;
        this.$translate([msg]).then(function (t) {
            _this.toastr.success(t[msg]);
        });
    };
    notificationService.$inject = ["toastr", "$translate"];
    return notificationService;
})();
module.exports = notificationService;
