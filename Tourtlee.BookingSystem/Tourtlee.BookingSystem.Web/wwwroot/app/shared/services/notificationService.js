var notificationService = (function () {
    function notificationService(toastr) {
        this.toastr = toastr;
    }
    notificationService.prototype.error = function (error) {
        this.toastr.error(error);
    };
    notificationService.prototype.errorUpdate = function (error) {
        this.toastr.error("Update failed");
    };
    ;
    notificationService.prototype.successUpdate = function () {
        this.toastr.success("Successfully updated");
    };
    ;
    notificationService.$inject = ['toastr'];
    return notificationService;
})();
module.exports = notificationService;
