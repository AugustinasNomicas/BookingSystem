var CreateBookingSetDto = (function () {
    function CreateBookingSetDto() {
    }
    return CreateBookingSetDto;
})();
exports.CreateBookingSetDto = CreateBookingSetDto;
var CreateBookingDto = (function () {
    function CreateBookingDto(index) {
        this.index = index;
    }
    return CreateBookingDto;
})();
exports.CreateBookingDto = CreateBookingDto;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(exports.Gender || (exports.Gender = {}));
var Gender = exports.Gender;
