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
                _logger.LogInformation("trying get weathers");
                var results = _repository.GetAll();
                if(results == null)
                {
                    return NotFound($"Couldnt get weathers : {results}");
                }
                return Ok(results);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all weathers : {ex}");              
            }
            _logger.LogWarning($"Could get weather objects");
            return BadRequest($"Error occured getting weathers");
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var result = _repository.GetById(id);
                if (result == null)
                {
                    return NotFound($"coulnt find weather with id : {id}");
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all weathers {ex}");
            }
            _logger.LogWarning($"Could get weather object with id : {id}");
            return BadRequest($"Error occured getting weather with id  : {id}");
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody]Weather weather)
        {
            try
            {
                _logger.LogInformation("trying save objet weather : " + weather.Name);
                if (!ModelState.IsValid)
                {
                    return BadRequest($"Model State is invalid cant create : {weather}");
                }
                if (weather == null)
                {
                    return BadRequest($"weather object is null cant create : {weather}");
                }
                _logger.LogInformation("objet weather : " + weather.Name + weather.Date);
                var newWeather = new Weather()
                {
                    Name = weather.Name,
                    Date = weather.Date,
                    TempC = weather.TempC,
                    Summary = weather.Summary,
                    City = weather.City,
                    Constraints = weather.Constraints
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

        [HttpPut("")]
        [HttpPatch("")]
        public async Task<IActionResult> Put([FromBody]Weather weather)
        {          
            try
            {
                _logger.LogInformation("trying put objet weather : " + weather.Name);
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

                _repository.PutWeather(oldWeather);
                if(await _repository.SaveChangesAsync())
                {
                    return Ok(oldWeather);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to edit weather: {ex}");
            }
            _logger.LogWarning($"Could not put the weather object : {weather}");
            return BadRequest($"CAnnot editweather {weather}");
        }

        [HttpGet("ByName/{name}")]
        public IActionResult Get(String name)
        {
            try
            {
                _logger.LogInformation($"Trying to get a weather by name : {name}");
                var result = _repository.GetByName(name);
                if (result == null)
                {
                    return NotFound($"Couldnt get weather with name : {name}");
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get Weather {ex}");             
            }
            _logger.LogWarning($"Could not put the weather object with name : {name}");
            return BadRequest($"Error occured cant get weather with name : {name}");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
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
