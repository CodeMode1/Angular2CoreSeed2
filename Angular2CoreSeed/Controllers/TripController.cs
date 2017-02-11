using Angular2CoreSeed.Models;
using Angular2CoreSeed.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Controllers
{
    [Authorize]
    [EnableCors("AnyGet")]
    [Route("api/[controller]")]
    public class TripController : Controller
    {
        private ILogger<TripController> _logger;
        private IWeatherRepository _repository;
        private UserManager<AppUser> _usrMng;

        public TripController(IWeatherRepository repository, 
            ILogger<TripController> logger, UserManager<AppUser> usrMng)
        {
            _repository = repository;
            _logger = logger;
            _usrMng = usrMng;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            try
            {
                _logger.LogInformation("trying get trips");
                var trips = _repository.GetAllTrips();
                if (trips == null)
                {
                    return NotFound($"Couldnt get trips : {trips}");
                }
                return Ok(trips);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all trips : {ex}");
            }
            _logger.LogWarning($"Could get trip objects");
            return BadRequest($"Error occured getting trips");
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                _logger.LogInformation($"trying get trip with id {id}");
                var trip = _repository.GetTripById(id);
                if (trip == null)
                {
                    return NotFound($"couldnt find trip with id : {id}");
                }
                return Ok(trip);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get trip with id : {id} , ex : {ex}");
            }
            _logger.LogWarning($"Could get trip object with id : {id}");
            return BadRequest($"Error occured getting weather with id  : {id}");
        }

        [HttpPost("")]
        public async Task<IActionResult> Post([FromBody] Trip trip)
        {
            try
            {
                _logger.LogInformation("trying save trip object : " + trip.Name);
                if (!ModelState.IsValid)
                {
                    return BadRequest($"Model State is invalid cant create : {trip}");
                }
                if (trip == null)
                {
                    return BadRequest($"trip object is null cant create : {trip}");
                }

                var newTrip = new Trip()
                {
                    Name = trip.Name,
                    Leaving = trip.Leaving,
                    Country = trip.Country,
                    Continent = trip.Continent
                };
                // get userName (unique) of logged in user using Identity.
                var userNameLoggedIn = this.User.Identity.Name;

                // find the logged in user object using the userName.
                var user = await _usrMng.FindByNameAsync(userNameLoggedIn);

                if (user != null)
                {
                    _logger.LogInformation(newTrip.AppUserTrips.Count() + "");
                    
                    var trips = user.AppUserTrips.Select(mc => mc.Trip);
                    //user.AppUserTrips.Add(new AppUserTrip() { AppUserId = user.Id, TripId = newTrip.Id });
                    AppUserTrip test = new AppUserTrip() { TripId = 1, AppUserId = "rere" };
                    user.AppUserTrips.Add(test);

                    _repository.AddTrip(newTrip);
                    if (await _repository.SaveChangesAsync())
                    {
                        return CreatedAtAction("Post", newTrip);
                    }
                }           
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save new trip: {ex}");
            }
            _logger.LogWarning($"Could not save the trip object : {trip}");
            return BadRequest($"CAnnot save new trip : {trip}");
        }

        [HttpPut("")]
        [HttpPatch("")]
        public async Task<IActionResult> Put([FromBody] Trip trip)
        {
            try
            {
                _logger.LogInformation("trying put objet trip : " + trip.Name);
                var oldTrip = _repository.GetTripById(trip.Id);
                if (oldTrip == null)
                {
                    return NotFound($"Cant find trip with this id : {trip.Id}");
                }

                // map old trip to the new trip values if they are different, else take the old values.
                oldTrip.Name = trip.Name ?? oldTrip.Name;
                oldTrip.Leaving = trip.Leaving;
                oldTrip.Country = trip.Country;
                oldTrip.Continent = trip.Continent ?? oldTrip.Continent;
                oldTrip.Stops = trip.Stops ?? oldTrip.Stops;

                _repository.PutTrip(oldTrip);
                if (await _repository.SaveChangesAsync())
                {
                    return Ok(oldTrip);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to edit trip : {trip}, ex :  {ex}");
            }
            _logger.LogWarning($"Could not put the trip object : {trip}");
            return BadRequest($"CAnnot edit trip {trip}");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                _logger.LogInformation($"Trying to delete a trip by id : {id}");
                var result = _repository.GetTripById(id);
                if (result == null)
                {
                    return NotFound($"Didnt found trip by id : {id}");
                }
                _repository.DeleteTrip(id);
                if (await _repository.SaveChangesAsync())
                {
                    return Ok($"Deleted trip successfull by id {id}");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Cant recuperate from error at delete trip by id : {id}", ex);
            }
            _logger.LogWarning($"Could not delete the trip object with id : {id}");
            return BadRequest($"Bad request to delete trip with id : {id}");
        }
    }
}
