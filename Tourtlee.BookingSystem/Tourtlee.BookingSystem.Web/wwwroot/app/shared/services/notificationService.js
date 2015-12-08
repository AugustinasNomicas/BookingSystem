var NotificationService = (function () {
    function NotificationService(toastr, $translate) {
        this.toastr = toastr;
        this.$translate = $translate;
    }
    NotificationService.prototype.error = function (error) {
        this.toastr.error(error);
    };
    NotificationService.prototype.errorUpdate = function (error) {
        var _this = this;
        this.$translate(["notifications.updateFailed"]).then(function (t) {
            _this.toastr.error(t["notifications.updateFailed"]);
        });
    };
    NotificationService.prototype.successUpdate = function () {
        var _this = this;
        this.$translate(["notifications.successfullyUpdated"]).then(function (t) {
            _this.toastr.success(t["notifications.successfullyUpdated"]);
        });
    };
    NotificationService.prototype.success = function (msg) {
        var _this = this;
        this.$translate([msg]).then(function (t) {
            _this.toastr.success(t[msg]);
        });
    };
    NotificationService.$inject = ["toastr", "$translate"];
    return NotificationService;
})();
exports.NotificationService = NotificationService;
