var ModalWindowController = (function () {
    function ModalWindowController($modalInstance, title, body, $translate) {
        var _this = this;
        this.$modalInstance = $modalInstance;
        this.title = "";
        this.body = "";
        this.confirm = function () {
            _this.$modalInstance.close();
        };
        this.cancel = function () {
            _this.$modalInstance.dismiss();
        };
        // If specified, fill window title and message with parameters
        if (title && body) {
            $translate([title, body]).then(function (t) {
                _this.title = t[title];
                _this.body = t[body];
            });
        }
    }
    ModalWindowController.$inject = ["$modalInstance", "title", "body", "$translate"];
    return ModalWindowController;
})();
exports.ModalWindowController = ModalWindowController;
