using Angular2CoreSeed.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace Angular2CoreSeed.Controllers
{
    public class AuthController : Controller
    {
        private DemoAppContext _context;
        private ILogger<AuthController> _logger;
        private SignInManager<AppUser> _signInMgr;
        private UserManager<AppUser> _userMng;
        private IPasswordHasher<AppUser> _hasher;
        private IConfigurationRoot _config;

        public AuthController(DemoAppContext context, 
            SignInManager<AppUser> signInMgr, 
            ILogger<AuthController> logger,
            UserManager<AppUser> userMngr,
            IPasswordHasher<AppUser> hasher,
            IConfigurationRoot config)
        {
            _context = context;
            _signInMgr = signInMgr;
            _logger = logger;
            _userMng = userMngr;
            _hasher = hasher;
            _config = config;
        }

        // cookie based authentification
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

        [HttpPost("api/auth/token")]
        public async Task<IActionResult> CreateToken([FromBody] CredentialModel model)
        {
            try
            {
                var user = await _userMng.FindByNameAsync(model.UserName);
                if(user != null)
                {
                    if(_hasher.VerifyHashedPassword(user, user.PasswordHash, model.Password) == PasswordVerificationResult.Success)
                    {
                        // get the identity claims for the particular user.
                        var userClaims = await _userMng.GetClaimsAsync(user);

                        var claims = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                            //store data about the user we might want without having to access db
                            new Claim(JwtRegisteredClaimNames.GivenName, user.FirstName),
                            new Claim(JwtRegisteredClaimNames.FamilyName, user.LastName),
                            new Claim(JwtRegisteredClaimNames.Email, user.Email)
                        }.Union(userClaims);

                        // put the key value in a config file
                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                        var token = new JwtSecurityToken(
                                issuer: _config["Tokens:Issuer"],
                                audience: _config["Tokens:Audience"],
                                claims: claims,
                                expires: DateTime.UtcNow.AddMinutes(15),
                                signingCredentials: creds
                            );

                        return Ok(new {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo,
                            role = token.Claims
                        });
                    }
                }
            }
            catch(Exception ex)
            {
                _logger.LogError($"Exception thrown while creating JWT: {ex}");
            }

            return BadRequest("Failed to generate token");
        }
    }
}
