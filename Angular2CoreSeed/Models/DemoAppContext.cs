using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Models
{
    public class DemoAppContext : DbContext 
    {
        public DemoAppContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Weather> Weathers { get; set; }
    }
}
