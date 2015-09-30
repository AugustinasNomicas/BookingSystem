using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Dnx.Runtime;
using Microsoft.Net.Http.Headers;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Tourtlee.BookingSystem.Web.ApiControllers
{
    [Route("api/[controller]")]
    public class TranslationsController : Controller
    {
        private const string TranslationsFilePath = @"..\..\Translations\{0}\{1}.json";
        
        private readonly IApplicationEnvironment _appEnvironment;

        public TranslationsController(IApplicationEnvironment appEnvironment)
        {
            _appEnvironment = appEnvironment;
        }

        [HttpGet(@"{part}/{language}")]
        public IActionResult Get(string part, string language)
        {
            var translationFile = string.Format(TranslationsFilePath, part, language);
            var translations = System.IO.File.ReadAllText(Path.Combine(_appEnvironment.ApplicationBasePath, translationFile));
            return new HttpOkObjectResult(translations);
        }
        
    }
}
