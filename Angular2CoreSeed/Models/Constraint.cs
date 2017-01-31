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
        public DateTime SunRising { get; set; }
        public DateTime SunSet { get; set; }
        public Boolean Clear { get; set; }
        public int FeelsLike { get; set; }
    }
}
