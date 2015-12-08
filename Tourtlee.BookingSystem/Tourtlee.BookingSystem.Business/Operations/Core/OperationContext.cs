using Microsoft.AspNet.Http;
using Microsoft.AspNet.Identity;
using Tourtlee.BookingSystem.Model;
using Tourtlee.BookingSystem.Model.Security;
using System.Security.Claims;

namespace Tourtlee.BookingSystem.Business.Operations.Core
{
    public interface IOperationContext
    {
        ApplicationUser User { get; }
    }

    public class OperationContext : IOperationContext
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ApplicationUser User { get; private set; }

        public OperationContext(UserManager<ApplicationUser> userManager, 
            IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _httpContextAccessor = httpContextAccessor;

            GetCurrentUser();
        }

        private void GetCurrentUser()
        {
            var userId = _httpContextAccessor.HttpContext.User.GetUserId();
            User = _userManager.FindByIdAsync(userId).Result;
        }
    }
}
