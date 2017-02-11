using Angular2CoreSeed.Models;
using Angular2CoreSeed.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Controllers
{
    [EnableCors("AnyGet")]
    [Route("api/[controller]")]
    public class StopController : Controller
    {
        private ILogger<StopController> _logger;
        private IWeatherRepository _repository;

        public StopController(IWeatherRepository repository, ILogger<StopController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        // save a stop at a trip's id.
        [HttpPost("{id}")]
        public async Task<IActionResult> Post(int id, [FromBody]Stop stop)
        {
            try
            {
                _logger.LogInformation($"Trying to save new stop : {stop} for trip with id : {id}");
                if (!ModelState.IsValid)
                {
                    return BadRequest($"Model is not valid, cant save stop : {stop}");
                }
                if(stop == null)
                {
                    return BadRequest($"Stop is null {stop}, cant save stop");
                }
                var newStop = new Stop()
                {
                    Name = stop.Name,
                    Arrival = stop.Arrival,
                    Leaving = stop.Leaving,
                    City = stop.City,
                    Longitude = stop.Longitude,
                    Order = stop.Order,
                    Latitude = stop.Latitude
                };
                _repository.AddStop(id, newStop);
                if(await _repository.SaveChangesAsync())
                {
                    return CreatedAtAction("Post", newStop);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save new stop: {ex}");
            }
            _logger.LogWarning($"Could not save the stop object : {stop} at trip id {id}");
            return BadRequest($"CAnnot save new stop : {stop} at trip id : {id}");
        }
    }
}
