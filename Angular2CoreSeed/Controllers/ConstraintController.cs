using Angular2CoreSeed.Models;
using Angular2CoreSeed.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Controllers
{
    [Route("api/weather/{id}/constraints")]
    public class ConstraintController : Controller
    {
        private ILogger<ConstraintController> _logger;
        private IWeatherRepository _repository;

        public ConstraintController(IWeatherRepository repository, ILogger<ConstraintController> logger)
        {
            _repository = repository;
            _logger = logger;
        }
        [HttpGet("")]
        public IActionResult Get(int id)
        {
            try
            {
                _logger.LogInformation($"Trying to get constraints for a temp id : {id}");
                var constraints = _repository.GetConstraintsById(id);
                if (constraints == null)
                {
                    return NotFound($"404 cant find constraints for this id : {id}");
                }
                return Ok(constraints);
            }
            catch (Exception ex)
            {
                _logger.LogError($"cant recuperate from error, cant find constraint for temp id : {id}");
            }
            _logger.LogInformation($"exiting method without constraints at id : {id} ");
            return BadRequest($"400 cant get constraints at temp id : {id}");
        }

        // save a constraint object : constraint, for a certain temperature object that has the id : id
        [HttpPost]
        public async Task<IActionResult> Post(int id, [FromBody]Constraint constraint)
        {
            try
            {
                _logger.LogInformation($"Trying to save constraints {constraint} for a temp id : {id}");
                if (!ModelState.IsValid)
                {
                    return BadRequest($"Model of {constraint} at {id} is not valid");
                }
                if(constraint == null)
                {
                    return BadRequest($"constraint object is null cant create : {constraint}");
                }
                var newConstraint = new Constraint()
                {
                    Wind = constraint.Wind,
                    Gust = constraint.Gust,
                    Humidity = constraint.Humidity,
                    SunRising = constraint.SunRising,
                    SunSet = constraint.SunSet,
                    Clear = constraint.Clear,
                    FeelsLike = constraint.FeelsLike
                };
                _repository.AddConstraints(id, newConstraint);
                if(await _repository.SaveChangesAsync())
                {
                    return CreatedAtAction("Post", newConstraint);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Cant recuperate from error, cant save constraint object at id : {id}, exception : {ex}");
            }
            _logger.LogInformation($"cant create the constraint object {constraint} at id : {id}");
            return BadRequest($"Exiting without creating constraint {constraint} at id : {id} ");
        }
    }
}
