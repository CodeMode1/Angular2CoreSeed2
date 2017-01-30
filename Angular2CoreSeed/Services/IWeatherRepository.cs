using System.Collections.Generic;
using System.Threading.Tasks;
using Angular2CoreSeed.Models;

namespace Angular2CoreSeed.Services
{
    public interface IWeatherRepository
    {
        void AddWeather(Weather newWeather);
        void DeleteWeather(int id);
        IEnumerable<Weather> GetAll();
        Weather GetById(int id);
        Weather GetByName(string name);
        Task<bool> SaveChangesAsync();
    }
}