var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PagedDto_1 = require("../../../shared/dto/PagedDto");
var BookingListDto = (function (_super) {
    __extends(BookingListDto, _super);
    function BookingListDto() {
        _super.apply(this, arguments);
    }
    return BookingListDto;
})(PagedDto_1.PagedDto);
exports.BookingListDto = BookingListDto;
var BookingDto = (function () {
    function BookingDto() {
    }
    return BookingDto;
})();
exports.BookingDto = BookingDto;
