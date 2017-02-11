using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Angular2CoreSeed.Models
{
    public class AppUser : IdentityUser
    {
        private readonly ICollection<AppUserTrip> _appUserTrips;

        public AppUser()
            : base()
        {
            _appUserTrips = new List<AppUserTrip>();
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ICollection<AppUserTrip> AppUserTrips
        {
            get
            {
                return _appUserTrips;
            }
        }

    }
}
