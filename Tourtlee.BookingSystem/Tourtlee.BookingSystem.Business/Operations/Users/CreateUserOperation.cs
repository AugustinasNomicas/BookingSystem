using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Dto.Accounts;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.Model.Security;

namespace Tourtlee.BookingSystem.Business.Operations.Users
{
    public class CreateUserOperation : OperationBase<CreateUserDto>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IOrganizationService _organizationService;

        public CreateUserOperation(UserManager<ApplicationUser> userManager, IOrganizationService organizationService)
        {
            _userManager = userManager;
            _organizationService = organizationService;
        }

        public new void Operate(CreateUserDto createUserDto)
        {
            OperateAsync(createUserDto).Wait();
        }

        private async Task OperateAsync(CreateUserDto createUserDto)
        {
            var user = await _userManager.FindByNameAsync(createUserDto.Email);

            if (user != null)
            {
                throw new ValidationException("User with username already exsits");
            }

            if (createUserDto.OrganizationMode == CreateUserOrganizatioModes.Create)
            {
                var organization = CreateOrganization(createUserDto.OrganizationName);
                createUserDto.IdOrganization = organization.IdOrganization;
            }

            user = new ApplicationUser
            {
                UserName = createUserDto.Email,
                Email = createUserDto.Email,
                IdOrganization = createUserDto.IdOrganization,
            };

            var userCreationResult = await _userManager.CreateAsync(user, createUserDto.Password);
            if (!userCreationResult.Succeeded)
            {
                throw new InvalidOperationException("Failed to create new user");
            }
        }

        private OrganizationDto CreateOrganization(string name)
        {
            var organization = new OrganizationDto
            {
                IdOrganization = Guid.NewGuid(),
                Name = name
            };
            _organizationService.Create(organization);
            return organization;
        }
    }
}
