using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2CoreSeed.Models
{
    public class Weather
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public int TempC { get; set; }
        public string Summary { get; set; }
        public string City { get; set; }
        [Editable(false)]
        public int TemperatureF
        {
            get
            {
                return 32 + (int)(TempC / 0.5556);
            }
        }
    }
}
