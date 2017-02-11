using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace Angular2CoreSeed.Controllers
{
    [EnableCors("AnyGet")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
