using System.Collections.Generic;
using System.Threading.Tasks;
using Angular2CoreSeed.Models;

namespace Angular2CoreSeed.Services
{
    public interface IWeatherRepository
    {
        void AddWeather(Weather newWeather);
        void PutWeather(Weather weather);
        void DeleteWeather(int id);
        IEnumerable<Weather> GetAll();
        Weather GetById(int id);
        Weather GetByName(string name);
        IEnumerable<Constraint> GetConstraintsById(int id);
        void AddConstraints(int id, Constraint constraint);
        Task<bool> SaveChangesAsync();
    }
}