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

        // works
        public void AddWeather(Weather newWeather)
        {
            _context.Add(newWeather);
        }

        // Works
        public Weather GetById(int id)
        {
            return _context.Weathers
                .Where(weather => weather.Id == id)
                .Include("Constraints")
                .FirstOrDefault();
        }

        // works
        public Weather GetByName(string name)
        {
            return _context.Weathers
                .Where(weather => weather.Name == name)
                .Include("Constraints")
                .FirstOrDefault();
        }

        // works
        public IEnumerable<Weather> GetAll()
        {
            _logger.LogInformation("Getting all weathers + their constraints from db");
            return _context.Weathers.Include("Constraints").ToList();
        }

        // Save to the changes to db 1 time
        public async Task<bool> SaveChangesAsync()
        {
            // the result of context.savechanges return the # of rows affected
            // if save to the db successful, # > 0
            if(await (_context.SaveChangesAsync()) > 0)
            {
                _logger.LogInformation("save succes bd");
                return true;
            }
            _logger.LogInformation("save fail bd");
            return false;
        }

        //works
        public void DeleteWeather(int id)
        {
            Weather weatherToDelete = 
                _context.Weathers
                .Where(weather => weather.Id == id)
                .FirstOrDefault();

            if(weatherToDelete != null)
            {
                _context.Remove(weatherToDelete);
            }           
        }

        public IEnumerable<Constraint> GetConstraintsById(int id)
        {
            Weather weather =
                _context.Weathers
                .Include("Constraints")
                .Where(w => w.Id == id)
                .FirstOrDefault();

            if(weather != null)
            {
                return weather.Constraints.ToList();
            }
            return null;
        }

        public void AddConstraints(int id, Constraint constraint)
        {
            Weather weather =
                _context.Weathers
                .Include("Constraints")
                .Where(w => w.Id == id)
                .FirstOrDefault();
            
            if(weather != null)
            {
                //ajouter la contrainte pour une certainte temp.
                weather.Constraints.Add(constraint);
                //ajouter la contrainte a la collection.
                _context.Add(constraint);
            }
        }

        public void PutWeather(Weather weather)
        {
            _context.Update(weather);
        }
    }
}
