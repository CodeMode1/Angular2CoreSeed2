using System.Collections.Generic;
using System.Threading.Tasks;
using Angular2CoreSeed.Models;

namespace Angular2CoreSeed.Services
{
    public interface IWeatherRepository
    {
        void AddWeather(Weather newWeather);
        IEnumerable<Weather> GetAll();
        Weather GetById(int id);
        Weather GetByName(string name);
        Task<bool> SaveChangesAsync();
    }
}