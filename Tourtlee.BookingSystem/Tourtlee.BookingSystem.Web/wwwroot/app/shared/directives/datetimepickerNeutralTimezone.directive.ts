
export class DatetimepickerNeutralTimezone implements angular.IDirective {
    restrict = 'A';
    priority = 1;
    require = 'ngModel';

    link(scope, element, attrs, ctrl) {
        ctrl.$formatters.push(value => {
            var date = new Date(Date.parse(value));
            date = new Date(date.getTime() + (60000 * date.getTimezoneOffset()));
            return date;
        });

        ctrl.$parsers.push(value => {
            var date = new Date(value.getTime() - (60000 * value.getTimezoneOffset()));
            return date;
        });
    }

    static factory(): angular.IDirectiveFactory {
        const directive = () => new DatetimepickerNeutralTimezone();
        return directive;
    }
}