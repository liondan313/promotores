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
            
            
        }

        // GET: api/Prospectos/{prospecto_id}
        [HttpGet("{prospecto_id}")]
        [Route("last2")]
        public IActionResult GetProspectoById(string prospecto_id)
        {
            var prospecto = context.prospectos
                .Include(p => p.colonia)
                .FirstOrDefault(p => p.prospecto_id == prospecto_id);

            if (prospecto == null)
            {
                return NotFound(); // Devuelve 404 si no se encuentra el prospecto
            }

            return Ok(prospecto); // Devuelve 200 con el prospecto y sus elementos relacionados
        }

    }
}
