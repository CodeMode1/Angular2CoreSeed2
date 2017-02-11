using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Models
{
    public class DemoAppContext : IdentityDbContext<AppUser> 
    {
        public DemoAppContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<Weather> Weathers { get; set; }
        public DbSet<Constraint> Constraints { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<Stop> Stops { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<AppUserTrip>()
                .HasKey(t => new { t.AppUserId, t.TripId });

            modelBuilder.Entity<AppUserTrip>()
                .HasOne(pt => pt.AppUser)
                .WithMany(p => p.AppUserTrips)
                .HasForeignKey(pt => pt.AppUserId);

            modelBuilder.Entity<AppUserTrip>()
                .HasOne(pt => pt.Trip)
                .WithMany(t => t.AppUserTrips)
                .HasForeignKey(pt => pt.TripId);
        }
    }
}
