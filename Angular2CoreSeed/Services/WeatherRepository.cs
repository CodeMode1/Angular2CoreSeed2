using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular2CoreSeed.Models;
using Microsoft.Extensions.Logging;

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
        public void AddWeather(Weather newWeather)
        {
            _context.Add(newWeather);
        }

        public Weather GetById(int id)
        {
            return _context.Weathers
                .Where(weather => weather.Id == id)
                .FirstOrDefault();
        }

        public Weather GetByName(string name)
        {
            return _context.Weathers
                .Where(weather => weather.Name == name)
                .FirstOrDefault();
        }

        public IEnumerable<Weather> GetAll()
        {
            _logger.LogInformation("Getting all weathers from db");
            return _context.Weathers.ToList();
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
    }
}
