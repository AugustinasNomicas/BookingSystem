var DatetimepickerNeutralTimezone = (function () {
    function DatetimepickerNeutralTimezone() {
        this.restrict = 'A';
        this.priority = 1;
        this.require = 'ngModel';
    }
    DatetimepickerNeutralTimezone.prototype.link = function (scope, element, attrs, ctrl) {
        ctrl.$formatters.push(function (value) {
            var date = new Date(Date.parse(value));
            date = new Date(date.getTime() + (60000 * date.getTimezoneOffset()));
            return date;
        });
        ctrl.$parsers.push(function (value) {
            var date = new Date(value.getTime() - (60000 * value.getTimezoneOffset()));
            return date;
        });
    };
    DatetimepickerNeutralTimezone.factory = function () {
        var directive = function () { return new DatetimepickerNeutralTimezone(); };
        return directive;
    };
    return DatetimepickerNeutralTimezone;
})();
exports.DatetimepickerNeutralTimezone = DatetimepickerNeutralTimezone;
