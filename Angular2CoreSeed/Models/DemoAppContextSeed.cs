using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Models
{
    public class DemoAppContextSeed
    {
        private DemoAppContext _context;

        public DemoAppContextSeed(DemoAppContext context)
        {
            _context = context;
        }

        public async Task EnsureSeedData()
        {
            // add sample data
            if (!_context.Weathers.Any())
            {
                for(var i = 0; i < 20; i++)
                {
                   var newWeather = new Weather()
                   {
                       Name = "CityWeather" + i,
                       Date = DateTime.UtcNow,
                       Summary = "This is a new weather #" + i,
                       City = "City#" + i
                   };
                    _context.Add(newWeather);
                }
                // push the data in the db
                await _context.SaveChangesAsync();
            }
        }
    }
}
