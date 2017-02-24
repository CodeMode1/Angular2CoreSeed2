using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Models
{
    public class Stop
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        // dates
        private DateTime arrival;
        public DateTime Arrival
        {
            get
            {
                return this.arrival.ToUniversalTime();
            }
            set
            {
                this.arrival = DateTime.SpecifyKind(value, DateTimeKind.Utc);
            }
        }
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
        public string City { get; set; }
        public string Cuisine { get; set; }
        public string Guide { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public int Order { get; set; }
        public int Quote { get; set; }
        public int TripId { get; set; }
        public Trip Trip { get; set; }
        public ICollection<Weather> Weathers { get; set; }
    }
}
