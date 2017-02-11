using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace Angular2CoreSeed.Models
{
    public class Constraint
    {
        [Key]
        public int Id { get; set; }
        public int Wind { get; set; }
        public int Gust { get; set; }
        public int Humidity { get; set; }
        // hour-time precision
        private DateTime sunRising;
        public DateTime SunRising
        {
            get
            {
                // get utc
                return this.sunRising.ToUniversalTime();
            }

            set
            {
                // set utc
                this.sunRising = DateTime.SpecifyKind(value, DateTimeKind.Utc);
            }
        }

        private DateTime sunSet;
        public DateTime SunSet
        {
            get
            {
                return this.sunSet.ToUniversalTime();
            }
            set
            {
                this.sunSet = DateTime.SpecifyKind(value, DateTimeKind.Utc);
            }

        }
        public Boolean Clear { get; set; }
        public int FeelsLike { get; set; }
        public int WeatherId { get; set; }
        public Weather Weather { get; set; }
    }
}

