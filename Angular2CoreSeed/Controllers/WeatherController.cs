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
    [Route("api/[controller]")]
    public class WeatherController : Controller
    {
        private ILogger<WeatherController> _logger;
        private IWeatherRepository _repository;

        public WeatherController(IWeatherRepository repository, ILogger<WeatherController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            try
            {
                var results = _repository.GetAll();
                if (results != null)
                {
                    return Ok(results); 
                }
                throw new Exception();
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to get all weathers {ex}");
                return BadRequest("Error occured getting weathers" + ex.Message.ToString());
            }
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]Weather weather)
        {
            _logger.LogInformation("lobjet weather : " + weather.Name + weather.Date);
            try
            {
                if (!ModelState.IsValid)
                {
                    throw new Exception();
                }
                if(weather == null)
                {
                    throw new Exception();
                }
                _logger.LogInformation("lobjet weather : " + weather.Name + weather.Date);
                var newWeather = new Weather()
                {
                    Name = weather.Name,
                    Date = weather.Date
                };
                _repository.AddWeather(newWeather);
                await _repository.SaveChangesAsync();
                return CreatedAtAction("Post", weather);
            }
            catch(Exception ex)
            {
                _logger.LogError("Failed to save new weather", ex.Message);
                return BadRequest($"CAnnot save new weather : {ex.Message.ToString()}");
            }
        }

        [HttpGet("[action]/{name}")]
        public IActionResult WeatherByName(string name)
        {
            try
            {
                var result = _repository.GetByName(name);
                if(result != null)
                {
                    return Ok(result);
                }
                throw new Exception();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Weather {ex}");
                return BadRequest("Error occured" + ex.ToString());
            }
        }
    }
}
