using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Tourtlee.BookingSystem.Business.Dto;
using Tourtlee.BookingSystem.Business.Dto.Accounts;
using Tourtlee.BookingSystem.Business.Services;
using Tourtlee.BookingSystem.Core;
using Tourtlee.BookingSystem.Model.Security;
using System.Linq;

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
            Validate(createUserDto);
            try
            {
                OperateAsync(createUserDto).Wait();
            }
            catch (AggregateException ex)
            {
                throw ex.InnerException;
            }
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
                throw new InvalidOperationException(userCreationResult.Errors.First().Description);
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

        private void Validate(CreateUserDto createUserDto)
        {
            if (createUserDto.Password != createUserDto.PasswordRepeat)
                throw new ValidationException("Passwords doesn't match");

            if (createUserDto.OrganizationMode == CreateUserOrganizatioModes.Existing
                && createUserDto.IdOrganization == Guid.Empty)
            {
                throw new ValidationException("IdOrganization not speciefied");
            }

            if (createUserDto.OrganizationMode == CreateUserOrganizatioModes.Create
                && string.IsNullOrWhiteSpace(createUserDto.OrganizationName))
            {
                throw new ValidationException("OrganizationName not speciefied");
            }
        }
    }
}
