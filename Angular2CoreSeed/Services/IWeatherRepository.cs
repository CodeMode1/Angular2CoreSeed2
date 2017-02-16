using System.Collections.Generic;
using System.Threading.Tasks;
using Angular2CoreSeed.Models;

namespace Angular2CoreSeed.Services
{
    public interface IWeatherRepository
    {
        IEnumerable<Trip> GetTripsUser(AppUser user);
        void DeleteTripUser(AppUser user, Trip trip);
        void AddTrip(Trip trip);
        void PutTrip(Trip trip);
        void DeleteTrip(int id);
        IEnumerable<Trip> GetAllTrips();
        Trip GetTripById(int id);
        void AddUserTrip(AppUserTrip userTrip);
        Stop GetStopById(int id);
        void DeleteStop(int id);
        void AddStop(int id, Stop stop);
        void AddWeather(Weather newWeather);
        void PutWeather(Weather weather);
        void DeleteWeather(int id);
        IEnumerable<Weather> GetAllWeathers();
        Weather GetWeatherById(int id);
        Weather GetWeatherByName(string name);
        Constraint GetConstraintById(int id);
        void AddConstraint(int id, Constraint constraint);
        Task<bool> SaveChangesAsync();
    }
}