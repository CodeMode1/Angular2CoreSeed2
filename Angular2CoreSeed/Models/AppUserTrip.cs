using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Models
{
    public class AppUserTrip
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }

        public int TripId { get; set; }
        public Trip Trip { get; set; }
    }
}
