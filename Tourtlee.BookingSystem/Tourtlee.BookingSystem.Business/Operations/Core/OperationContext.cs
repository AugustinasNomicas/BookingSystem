using System;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Identity;
using Tourtlee.BookingSystem.Model.Security;
using System.Security.Claims;

namespace Tourtlee.BookingSystem.Business.Operations.Core
{
    public interface IOperationContext
    {
        ApplicationUser User { get; }
        Guid IdOrganization { get; }
    }

    public class OperationContext : IOperationContext
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ApplicationUser User { get; private set; }
        public Guid IdOrganization { get; private set; }


        public OperationContext(UserManager<ApplicationUser> userManager,
            IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _httpContextAccessor = httpContextAccessor;

            GetUser();
        }

        private void GetUser()
        {
            var userId = _httpContextAccessor.HttpContext.User.GetUserId();
            User = _userManager.FindByIdAsync(userId).Result;
            IdOrganization = User.IdOrganization;
        }
    }
}
