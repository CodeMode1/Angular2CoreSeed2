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
    //[EnableCors("AnyGet")]
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
            _logger.LogWarning($"Couldn get trip objects");
            return BadRequest($"Error occured getting trips");
        }

        [HttpGet("bestTrips")]
        public IActionResult GetBestTrips()
        {
            try
            {
                _logger.LogInformation("trying get best trips");
                var trips = _repository.GetBestTrips();
                if(trips == null)
                {
                    return NotFound($"Couldnt get best trips : {trips}");
                }
                return Ok(trips);
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed tp get best trips : {ex}");
            }
            _logger.LogWarning($"Couldn get best trips");
            return BadRequest($"Error occured getting best trips");
        }

        [HttpGet("user")]
        public async Task<IActionResult> GetTripsUser()
        {
            try
            {
                //  get userName (unique) of logged in user using Identity.
                var userNameLoggedIn = this.User.Claims.ElementAt(0).Value;

                // find the logged in user object using the userName.
                var user = await _usrMng.FindByNameAsync(userNameLoggedIn);
                _logger.LogInformation($"trying to get trips for user {user}");
                if(user != null)
                {
                    var trips = _repository.GetTripsUser(user);
                    return Ok(trips);
                }
            }
            catch(Exception ex)
            {
                _logger.LogError($"Failed to get trips for user : {ex}");
            }
            _logger.LogWarning($"Couldnt get trips for user");
            return BadRequest($"Error occured getting trips for user");
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
            return BadRequest($"Error occured getting trip with id  : {id}");
        }

        [HttpPost("")]
        //[Authorize(Policy = "SuperUsers")]
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
                _repository.AddTrip(newTrip);
                if (await _repository.SaveChangesAsync() == false)
                {
                    // TODO Error scenario??
                    _logger.LogInformation("Add trip failed: " + trip.Name);
                }

                //  get userName (unique) of logged in user using Identity.
                // var userName = this.User.Identity.Name;
                var userNameLoggedIn = this.User.Claims.ElementAt(0).Value;

                // find the logged in user object using the userName.
                var user = await _usrMng.FindByNameAsync(userNameLoggedIn);

                if (user != null)
                {
                    AppUserTrip test = new AppUserTrip() { TripId = newTrip.Id, AppUserId = user.Id };

                    _repository.AddUserTrip(test);
                    if (await _repository.SaveChangesAsync())
                    {
                        //var trips = user.AppUserTrips.Select(mc => mc.Trip);  // TODO DOES NOT WORK
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
        [Authorize(Policy = "SuperUsers")]
        public async Task<IActionResult> DeleteTrip(int id)
        {
            try
            {
                _logger.LogInformation($"SuperUser Trying to delele trip with id {id}");
                var trip = _repository.GetTripById(id);
                if(trip == null)
                {
                    return NotFound($"Didnt foud a trip with id {id}");
                }
                _repository.DeleteTrip(trip.Id);
                if(await _repository.SaveChangesAsync())
                {
                    return Ok($"Deleted Trip Success");
                }
            }
            catch(Exception ex)
            {
                _logger.LogError($"Cant recuperate from error at delete trip with id {id}", ex);
            }
            _logger.LogWarning($"Could not delete the trip with id : {id}");
            return BadRequest($"Bad request to delete trip with id {id}");
        }

        [HttpDelete("userTrip/{id}")]
        public async Task<IActionResult> DeleteUserTrip(int id)
        {
            try
            {
                _logger.LogInformation($"Trying to get a trip by id : {id}");
                var trip = _repository.GetTripById(id);
                if (trip == null)
                {
                    return NotFound($"Didnt found trip by id : {id}");
                }

                //  get userName (unique) of logged in user using Identity.
                // var userName = this.User.Identity.Name;
                var userNameLoggedIn = this.User.Claims.ElementAt(0).Value;

                // find the logged in user object using the userName.
                var user = await _usrMng.FindByNameAsync(userNameLoggedIn);

                // trying to delete a trip from the many to many table users-trips passing trip/user
                _repository.DeleteTripUser(user, trip);
                if (await _repository.SaveChangesAsync())
                {
                    return Ok($"Deleted trip success for the user");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Cant recuperate from error at delete for user {User.Identity.Name}", ex);
            }
            _logger.LogWarning($"Could not delete the trip object with for user: {User.Identity.Name}");
            return BadRequest($"Bad request to delete trip for user {User.Identity.Name}");
        }
    }
}
