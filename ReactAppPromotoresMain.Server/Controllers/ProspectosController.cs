using Microsoft.AspNetCore.Mvc;
using ReactAppPromotores.Server.Models.Entities;


namespace ReactAppPromotores.Server.Controllers
{
    [Route("api/prospectos")]
    [ApiController]
    public class ProspectosController : ControllerBase
    {

        /*private readonly ApplicationDbContext _dbContext;

        public ProspectosController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }*/

        // Simulación de una lista de prospectos (reemplazar con la lógica de tu aplicación)
        private static List<Prospectos> prospectosList = new List<Prospectos>
        {
            new Prospectos { Id = 1, Nombre = "Juan", PrimerApellido = "Pérez" },
            new Prospectos { Id = 2, Nombre = "María", PrimerApellido = "García" },
            new Prospectos { Id = 3, Nombre = "Carlos", PrimerApellido = "Martínez" }
        };

        [HttpGet]
        [Route("last")]
        public async Task<IActionResult> ObtenerProductos()
        {
            //var prospectos = _dbContext.Prospectos.ToList();
            return Ok(prospectosList);
        }


    }
}
