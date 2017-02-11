using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Models
{
    public class Trip
    {
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
        public ICollection<Stop> Stops { get; set; }
        public ICollection<AppUserTrip> AppUserTrips { get; set; }
    }
}
