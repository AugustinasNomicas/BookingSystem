var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PagedRequestDto_1 = require("../../../shared/dto/PagedRequestDto");
var BookingsFilterDto = (function (_super) {
    __extends(BookingsFilterDto, _super);
    function BookingsFilterDto() {
        _super.apply(this, arguments);
    }
    return BookingsFilterDto;
})(PagedRequestDto_1.PagedRequestDto);
exports.BookingsFilterDto = BookingsFilterDto;
