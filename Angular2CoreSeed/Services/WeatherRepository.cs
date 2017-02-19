﻿using System;
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
            return _context.Trips.ToList();
        }

        public IEnumerable<Trip> GetTripsUser(AppUser user)
        {
            return _context.Trips
                .Where(trips => trips.AppUserTrips
                .Any(trip => trip.AppUserId == user.Id))
                .Include(trip => trip.Stops)
                .ToList();
        }

        // supprimer le trip de la table many to many : users-trips
        public void DeleteTripUser(AppUser user, Trip trip)
        {
            AppUser User =
                _context.AppUsers
                .Where(u => u.Id == user.Id)
                .Include(u => u.AppUserTrips).ThenInclude(AUT => AUT.Trip)
                                                .ThenInclude(t => t.Stops)
                .FirstOrDefault();
            if (User != null)
            {
                AppUserTrip tripRemove =
                    User.AppUserTrips
                    .Where(aut => aut.AppUser == user && aut.Trip == trip && aut.AppUserId == user.Id && aut.TripId == trip.Id)
                    .FirstOrDefault();

                User.AppUserTrips.Remove(tripRemove);
            }
        }

        public void AddUserTrip(AppUserTrip userTrip)
        {
            _context.Add(userTrip);
        }


        public Trip GetTripById(int id)
        {
            return _context.Trips
                .Where(trip => trip.Id == id)
                .Include("AppUserTrips.AppUser")
                .Include("Stops")
                .FirstOrDefault();
        }

        public void AddTrip(Trip trip)
        {
            _context.Add(trip);
        }

        public void PutTrip(Trip trip)
        {
            _context.Update(trip);
        }

        public void DeleteTrip(int id)
        {
            Trip tripToDelete =
                _context.Trips
                .Where(trip => trip.Id == id)
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

        // admin
        public void DeleteStop(int id)
        {
            Stop stopToDelete =
                _context.Stops
                .Where(stop => stop.Id == id)
                .FirstOrDefault();
            if(stopToDelete != null)
            {
                _context.Remove(stopToDelete);
            }
        }

        //// remove stop from users trip
        //public void DeleteStopFromUser(Stop stop, int tripId, AppUser user)
        //{
        //    // get a trip
        //    Trip trip =
        //        _context.Trips
        //        .Where(t => t.AppUserTrips
        //        .Any(APT => APT.TripId == tripId && APT.AppUserId == user.Id))
        //        .Include(APT => APT.Stops)
        //        .FirstOrDefault();

        //    if(trip != null)
        //    {
        //        trip.Stops.Remove(stop);
        //    }
        //}

        // Works
        public Weather GetWeatherById(int id)
        {
            return _context.Weathers
                .Where(weather => weather.Id == id)
                .Include("Constraint")
                .Include("Stop")
                .FirstOrDefault();
        }

        // works
        public Weather GetWeatherByName(string name)
        {
            return _context.Weathers
                .Where(weather => weather.Name == name)
                .Include("Constraint")
                .FirstOrDefault();
        }

        // works
        public IEnumerable<Weather> GetAllWeathers()
        {
            _logger.LogInformation("Getting all weathers + its constraint from db");
            return _context.Weathers.Include("Constraint").Include("Stop").ToList();
        }

        // works
        public void AddWeather(Weather newWeather)
        {
            _context.Add(newWeather);
        }

        // works
        public void PutWeather(Weather weather)
        {
            _context.Update(weather);
        }

        //works
        public void DeleteWeather(int id)
        {
            Weather weatherToDelete =
                _context.Weathers
                .Where(weather => weather.Id == id)
                .FirstOrDefault();

            if (weatherToDelete != null)
            {
                _context.Remove(weatherToDelete);
            }
        }

        public Constraint GetConstraintById(int id)
        {
            Weather weather =
                _context.Weathers
                .Include("Constraint")
                .Where(w => w.Id == id)
                .FirstOrDefault();

            if(weather != null)
            {
                return weather.Constraint;
            }
            return null;
        }

        public void AddConstraint(int id, Constraint constraint)
        {
            Weather weather =
                _context.Weathers
                .Include("Constraint")
                .Where(w => w.Id == id)
                .FirstOrDefault();
            
            if(weather != null)
            {
                //ajouter la contrainte pour une certainte temp.
                weather.Constraint = constraint;
                // setter les FK de l'entite dependante (constraint)
                constraint.WeatherId = weather.Id;
                constraint.Weather = weather;
                //ajouter la contrainte a la collection.
                _context.Add(constraint);
            }
        }

        // Save to the changes to db 1 time
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
