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
            if (!_context.Trips.Any())
            {
                var usTrip1 = new Trip()
                {
                    Name = "Forfait Floride#1",
                    Leaving = new DateTime(2017, 5, 6),
                    Country = "États-Unis",
                    Continent = "Amérique du Nord"
                };
                _context.Trips.Add(usTrip1);
  
                var usTrip2 = new Trip()
                {
                    Name = "Forfait Floride#2",
                    Leaving = new DateTime(2017, 4, 1),
                    Country = "États-Unis",
                    Continent = "Amérique du Nord"
                };
                _context.Trips.Add(usTrip2);

                var stop1usTrip1 = new Stop()
                {
                    Name = "Fort Lauderdale Escapade",
                    Arrival = new DateTime(2017, 5, 7),
                    Leaving = new DateTime(2017, 5, 9),
                    City = "Fort Lauderdale",
                    Trip = usTrip1,
                    TripId = usTrip1.Id
                };
                _context.Stops.Add(stop1usTrip1);

                var stop2usTrip1 = new Stop()
                {
                    Name = "Miami Escapade",
                    Arrival = new DateTime(2017, 5, 10),
                    Leaving = new DateTime(2017, 5, 13),
                    City = "Miami",
                    Trip = usTrip1,
                    TripId = usTrip1.Id
                };
                _context.Stops.Add(stop2usTrip1);

                var stop1usTrip2 = new Stop()
                {
                    Name = "Orlando Escapade",
                    Arrival = new DateTime(2017, 4, 2),
                    Leaving = new DateTime(2017, 4, 5),
                    City = "Orlando",
                    Trip = usTrip2,
                    TripId = usTrip2.Id
                };
                _context.Stops.Add(stop1usTrip2);

                var stop2usTrip2 = new Stop()
                {
                    Name = "Kissimmee Escapade",
                    Arrival = new DateTime(2017, 4, 6),
                    Leaving = new DateTime(2017, 4, 9),
                    City = "Kissimmee",
                    Trip = usTrip2,
                    TripId = usTrip2.Id
                };
                _context.Stops.Add(stop2usTrip2);

                var weather1 = new Weather()
                {
                    Name = "Température FortLauderdale",
                    Hour = new TimeSpan(13, 10, 0),
                    TempC = 27,
                    StopId = stop1usTrip1.Id,
                    Stop = stop1usTrip1
                };
                _context.Weathers.Add(weather1);

                var weather2 = new Weather()
                {
                    Name = "Température Miami",
                    Hour = new TimeSpan(14, 20, 0),
                    TempC = 28,
                    StopId = stop2usTrip1.Id,
                    Stop = stop2usTrip1
                };
                _context.Weathers.Add(weather2);

                var weatherConstraint1 = new Constraint()
                {
                    Wind = 2,
                    Gust = 3,
                    Humidity = 6,
                    Clear = true,
                    FeelsLike = 20,
                    WeatherId = weather1.Id,
                    Weather = weather1
                };
                _context.Constraints.Add(weatherConstraint1);

                var weatherConstraint2 = new Constraint()
                {
                    Wind = 4,
                    Gust = 1,
                    Humidity = 7,
                    Clear = true,
                    FeelsLike = 22,
                    WeatherId = weather2.Id,
                    Weather = weather2
                };
                _context.Constraints.Add(weatherConstraint2);
            }

            // push the data in the db
            await _context.SaveChangesAsync();
        }
    }
}
