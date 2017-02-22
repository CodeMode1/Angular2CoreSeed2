using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Models
{
    public class Trip
    {
        private readonly ICollection<AppUserTrip> _appUserTrips;
        private ICollection<Stop> _stops;

        public Trip()
            : base()
        {
            _appUserTrips = new List<AppUserTrip>();
            _stops = new List<Stop>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        // membre contient data
        private DateTime _leaving;
        // propriété d'accès au data (get, set modifier le membre)
        public DateTime Leaving
        {
            get
            {
                return this._leaving.ToUniversalTime();
            }
            set
            {
                this._leaving = DateTime.SpecifyKind(value, DateTimeKind.Utc);
            }
        }
        public string Country { get; set; }
        public string Continent { get; set; }
        public int Rating
        {
            get
            {
                if ((Stops != null) && (Stops.Any() == true))
                {
                    return (this.Stops.Sum(s => s.Quote) / this.Stops.Count());
                }
                return (0);
            }
        }
        public ICollection<Stop> Stops
        {
            get
            {
                return _stops;
            }
            set
            {
                this._stops = value;
            }
        }
        public ICollection<AppUserTrip> AppUserTrips
        {
            get
            {
                return _appUserTrips;
            }
        }
    }
}
