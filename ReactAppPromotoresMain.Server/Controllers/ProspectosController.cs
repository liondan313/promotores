using ReactAppPromotoresMain.Server.Context;
using Microsoft.AspNetCore.Mvc;
using ReactAppPromotores.Server.Models.Entities;
using System.Globalization;
using Microsoft.EntityFrameworkCore;


namespace ReactAppPromotores.Server.Controllers
{
    [Route("/prospectos")]
    [ApiController]
    public class ProspectosController : ControllerBase
    {
        private readonly AppDbContext context;
        public ProspectosController(AppDbContext context)
        {
            this.context = context;
        }

        /*private readonly ApplicationDbContext _dbContext;

        public ProspectosController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }*/

        // Simulación de una lista de prospectos (reemplazar con la lógica de tu aplicación)
        /*private static List<Prospectos> prospectosList = new List<Prospectos>
        {
            new Prospectos { Id = 1, nombre = "Juan", primerApellido = "Pérez" },
            new Prospectos { Id = 2, nombre = "María", primerApellido = "García" },
            new Prospectos { Id = 3, nombre = "Carlos", primerApellido = "Martínez" }
        };*/

        [HttpGet]
        [Route("last")]
        public async Task<IActionResult> ObtenerProspectosList()
        {   
            try
            {
                var prospectos = context.prospectos.ToList();

                return Ok(prospectos);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
            //return Ok(prospectosList);
        }



    }
}
