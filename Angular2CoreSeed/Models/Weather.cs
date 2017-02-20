using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Models
{
    public class Weather
    {
        private readonly ICollection<Constraint> _constraints;

        public Weather()
            : base()
        {
            _constraints = new List<Constraint>();
        }
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        // hour taking temp.
        private TimeSpan hour;

        public TimeSpan Hour
        {
            get
            {
                return this.hour;
            }
            set
            {
                this.hour = value;
            }
        }
        public int TempC { get; set; }
        public string Summary { get; set; }
        [Editable(false)]
        public int TemperatureF
        {
            get
            {
                return 32 + (int)(TempC / 0.5556);
            }
        }
        public int StopId { get; set; }
        public Stop Stop { get; set; }
        public ICollection<Constraint> Constraints
        {
            get
            {
                return _constraints;
            }
        }
    }
}
