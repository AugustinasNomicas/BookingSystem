var CreateUserDto = (function () {
    function CreateUserDto() {
    }
    return CreateUserDto;
})();
exports.CreateUserDto = CreateUserDto;
(function (CreateUserOrganizationModes) {
    CreateUserOrganizationModes[CreateUserOrganizationModes["Existing"] = 0] = "Existing";
    CreateUserOrganizationModes[CreateUserOrganizationModes["Create"] = 1] = "Create";
})(exports.CreateUserOrganizationModes || (exports.CreateUserOrganizationModes = {}));
var CreateUserOrganizationModes = exports.CreateUserOrganizationModes;
