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
        private DateTime leaving;
        public DateTime Leaving
        {
            get
            {
                return this.leaving.ToUniversalTime();
            }
            set
            {
                this.leaving = DateTime.SpecifyKind(value, DateTimeKind.Utc);
            }
        }
        public string Country { get; set; }
        public string Continent { get; set; }
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
