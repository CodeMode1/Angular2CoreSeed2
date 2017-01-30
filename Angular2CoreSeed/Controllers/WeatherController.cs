using Angular2CoreSeed.Models;
using Angular2CoreSeed.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
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
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all weathers {ex}");
                return BadRequest($"Error occured getting weathers{ex}");
            }
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]Weather weather)
        {
            _logger.LogInformation("trying save objet weather : " + weather.Name);
            try
            {
                if (!ModelState.IsValid)
                {
                    throw new Exception();
                }
                if (weather == null)
                {
                    throw new Exception();
                }
                _logger.LogInformation("lobjet weather : " + weather.Name + weather.Date);
                var newWeather = new Weather()
                {
                    Name = weather.Name,
                    Date = weather.Date,
                    TempC = weather.TempC,
                    Summary = weather.Summary,
                    City = weather.City
                };
                _repository.AddWeather(newWeather);
                if(await _repository.SaveChangesAsync())
                {
                    return CreatedAtAction("Post", newWeather);
                }             
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save new weather: {ex}");

            }
            _logger.LogWarning($"Could not save the weather object : {weather}");
            return BadRequest($"CAnnot save new weather : {weather}");
        }

        [HttpPut]
        [HttpPatch]
        public async Task<IActionResult> Put([FromBody]Weather weather)
        {
            _logger.LogInformation("trying save objet weather : " + weather.Name);
            try
            {
                var oldWeather = _repository.GetById(weather.Id);
                if(oldWeather == null)
                {
                    return NotFound($"Cant find weather with this id : {weather.Id}");
                }

                // map old weather to the new weather values if they are different
                oldWeather.Name = weather.Name ?? oldWeather.Name;
                oldWeather.Date = weather.Date;
                oldWeather.TempC = weather.TempC;
                oldWeather.Summary = weather.Summary ?? oldWeather.Summary;
                oldWeather.City = weather.City ?? oldWeather.City;

                if(await _repository.SaveChangesAsync())
                {
                    return Ok(oldWeather);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to edit weather: {ex}");
            }

            return BadRequest($"CAnnot editweather {weather}");
        }

        [HttpGet("ByName/{name}")]
        public IActionResult Get(String name)
        {
            try
            {
                var result = _repository.GetByName(name);
                if (result != null)
                {
                    return Ok(result);
                }
                throw new Exception();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Weather {ex}");
                return BadRequest($"Error occured: {ex}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                _logger.LogInformation($"Trying to delete a weather by id : {id}");
                var result = _repository.GetById(id);
                if (result == null)
                {
                    return NotFound($"Didnt found by id : {id}");
                }
                _repository.DeleteWeather(id);
                if(await _repository.SaveChangesAsync())
                {
                    return Ok($"Deleted weather successfull by id {id}");
                }               
            }
            catch (Exception ex)
            {
                _logger.LogError($"Cant recuperate from error at delete weather by id : {id}", ex);
            }
            _logger.LogWarning($"Could not delete the weather obejct with id : {id}");
            return BadRequest($"Bad request to delete weather with id : {id}");
        }
    }
}
