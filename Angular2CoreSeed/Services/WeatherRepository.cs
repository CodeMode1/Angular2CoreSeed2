using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2CoreSeed.Models;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace Angular2CoreSeed.Services
{
    public class WeatherRepository : IWeatherRepository
    {
        private DemoAppContext _context;
        private ILogger<WeatherRepository> _logger;

        public WeatherRepository(DemoAppContext context, ILogger<WeatherRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Trip> GetAllTrips()
        {
            _logger.LogInformation("Getting all trips + their stops from db");

            // taking the trips where theyre stops collection has a > average on the quote field than the Stop collections average.
            var trips =
                _context.Trips
                .Include(t => t.Stops)
                .OrderByDescending(t => t.Rating)
                .ToList();

            return trips;
        }

        // getting trips where theyre own stops average is > that the stops collection average.
        public IEnumerable<Trip> GetBestTrips()
        {
            // 1 -linq -> average on the quote field of the stops collection.
            int average =
                (int)_context.Stops
                .Average(s => s.Quote);

            var trips =
                _context.Trips
                .Include(t => t.Stops)
                .ToList();

            var tripsFiltered =
                trips
                .FindAll(t => (t.Rating >= average && t.Rating > 0))
                .OrderByDescending(t => t.Rating)
                .ToList();
            _logger.LogInformation("" + tripsFiltered);
            return tripsFiltered;
        }

        public IEnumerable<Trip> GetTripsUser(AppUser user)
        {
            return _context.Trips
                .Where(trips => trips.AppUserTrips
                .Any(trip => trip.AppUserId == user.Id))
                .Include(trip => trip.Stops)
                .ToList();
        }

        // supprimer le trip de la table many to many : users-trips. Anyone can t
        public void DeleteTripUser(AppUser user, Trip trip)
        {
            AppUser User =
                _context.AppUsers
                .Where(u => u.Id == user.Id)
                .Include(u => u.AppUserTrips).ThenInclude(AUT => AUT.Trip)
                                                .ThenInclude(t => t.Stops)
                .FirstOrDefault();
            if (User != null && trip != null)
            {
                AppUserTrip tripRemove =
                    User.AppUserTrips
                    .Where(aut => aut.AppUser == user && aut.Trip == trip && aut.AppUserId == user.Id && aut.TripId == trip.Id)
                    .FirstOrDefault();

                User.AppUserTrips.Remove(tripRemove);
            }
            _context.Remove(trip);
        }

        public void AddUserTrip(AppUserTrip userTrip)
        {
            _context.Add(userTrip);
        }

        public Trip GetTripById(int id)
        {
            int count =
                _context.Stops
                .Where(s => s.TripId == id)
                .Count();

            if(count > 10)
            {
                count = 10;
            }

            var trip =
                _context.Trips
                .Include(t => t.AppUserTrips).ThenInclude(aut => aut.AppUser)
                .Include(t => t.Stops)
                .Where(t => t.Id == id)
                .FirstOrDefault();

            return trip;
        }

        public void AddTrip(Trip trip)
        {
            _context.Add(trip);
        }

        public void PutTrip(Trip trip)
        {
            _context.Update(trip);
        }

        // SuperUsers (claim) -> authorize policy, because stops and trips are public.
        public void DeleteTrip(int id)
        {
            Trip tripToDelete =
                _context.Trips
                .Where(trip => trip.Id == id)
                .Include(trip => trip.Stops)
                .FirstOrDefault();

            if (tripToDelete != null)
            {
                _context.Remove(tripToDelete);
            }
        }

        public void AddStop(int id, Stop stop)
        {
            Trip tripToAddStop =
                _context.Trips
                .Include("Stops")
                .Where(trip => trip.Id == id)
                .FirstOrDefault();

            if(tripToAddStop != null)
            {
                // ajouter collection de stops du trip
                tripToAddStop.Stops.Add(stop);
                // setter FK pour le stop
                stop.Trip = tripToAddStop;
                stop.TripId = tripToAddStop.Id;
                // ajouter stop dans la bd
                _context.Stops.Add(stop);
            }
        }

        public Stop GetStopById(int id)
        {
            return _context.Stops
                .Where(stop => stop.Id == id)
                .FirstOrDefault();
        }

        // SuperUsers (claim) -> authorize policy, because stops and trips are public.
        public void DeleteStop(int id)
        {
            Stop stopToDelete =
                _context.Stops
                .Where(stop => stop.Id == id)
                .Include(stop => stop.Weathers).ThenInclude(weathers => weathers.Constraints)
                .FirstOrDefault();
            if(stopToDelete != null)
            {
                _context.Remove(stopToDelete);
            }
        }

        public Weather GetWeatherById(int id)
        {
            return _context.Weathers
                .Where(weather => weather.Id == id)
                .Include("Constraints")
                .Include("Stop")
                .FirstOrDefault();
        }

        public IEnumerable<Weather> GetAllWeathers()
        {
            _logger.LogInformation("Getting all weathers + its constraint from db");
            return _context.Weathers.Include("Constraints").Include("Stop").ToList();
        }

        public void AddWeather(Weather newWeather)
        {
            _context.Add(newWeather);
        }

        public void PutWeather(Weather weather)
        {
            _context.Update(weather);
        }

        // Delete weather objects + its child collection : WeatherConstraints.
        public void DeleteWeather(int id)
        {
            Weather weatherToDelete =
                _context.Weathers
                .Where(weather => weather.Id == id)
                .Include(weather => weather.Constraints)
                .FirstOrDefault();

            if (weatherToDelete != null)
            {
                _context.Remove(weatherToDelete);
            }
        }

        public IEnumerable<Constraint> GetConstraintsById(int id)
        {
            var constraints =
                _context.Constraints
                .Where(c => c.WeatherId == id)
                .Include(c => c.Weather)
                .ToList();

            return constraints;
        }

        public async Task<bool> SaveChangesAsync()
        {
            // the result of context.savechanges return the # of rows affected
            // if save to the db successful, # > 0
            if (await (_context.SaveChangesAsync()) > 0)
            {
                _logger.LogInformation("save succes bd");
                return true;
            }
            _logger.LogInformation("save fail bd");
            return false;
        }
    }
}
