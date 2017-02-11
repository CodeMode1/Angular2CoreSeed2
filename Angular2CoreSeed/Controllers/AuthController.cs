using Angular2CoreSeed.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Controllers
{
    public class AuthController : Controller
    {
        private DemoAppContext _context;
        private ILogger<AuthController> _logger;
        private SignInManager<AppUser> _signInMgr;

        public AuthController(DemoAppContext context, 
            SignInManager<AppUser> signInMgr, 
            ILogger<AuthController> logger)
        {
            _context = context;
            _signInMgr = signInMgr;
            _logger = logger;
        }

        [HttpPost("api/auth/login")]
        public async Task<IActionResult> Login([FromBody] CredentialModel model)
        {
            try
            {
                _logger.LogInformation($"Trying to log a user");
                var result = await _signInMgr.PasswordSignInAsync(model.UserName, model.Password, false, false);
                if (result.Succeeded)
                {
                    return Ok();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Exception thrown while logging in: {ex}");
            }
            // not giving much information on the reason of the failure, so not giving out clues
            // on how to break into the system (security leaks)
            return BadRequest($"Fail to log user");
        }
    }
}
