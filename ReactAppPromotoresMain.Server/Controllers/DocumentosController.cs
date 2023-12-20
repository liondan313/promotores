using ReactAppPromotoresMain.Server.Context;
using Microsoft.AspNetCore.Mvc;
using ReactAppPromotores.Server.Models.Entities;
using System.Globalization;
using Microsoft.EntityFrameworkCore;
using ReactAppPromotoresMain.Server.Models.Entities;


namespace ReactAppPromotores.Server.Controllers
{
    [Route("/documentos")]
    [ApiController]
    public class DocumentosController : ControllerBase
    {
        private readonly AppDbContext context;
        public DocumentosController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpPost("guardarDocumento")]
        public async Task<IActionResult> GuardarDocumento([FromForm] DocumentoModel documento)
        {
            try
            {
                // Verificar si el modelo es válido
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Guardar los datos en la base de datos
                    var nuevoDocumento = new DocumentoProspecto
                    {
                        Prospecto_Id = documento.prospectoId,
                        Nombre = documento.nombre,
                        Archivo = await ConvertirArchivoABinario(documento.archivo)
                    };

                    context.documentos_prospecto.Add(nuevoDocumento);
                    context.SaveChanges();
                
                return Ok("Documento guardado correctamente");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        private async Task<byte[]> ConvertirArchivoABinario(IFormFile archivo)
        {
            using (var memoryStream = new MemoryStream())
            {
                await archivo.CopyToAsync(memoryStream);
                return memoryStream.ToArray();
            }
        }


        [HttpGet("obtenerDocumentosPorProspecto/{prospectoId}")]
        public ActionResult<IEnumerable<DocumentoModel>> ObtenerDocumentosPorProspecto(long prospectoId)
        {
            try
            {
                // Obtener los documentos asociados al prospecto
                var documentos = context.documentos_prospecto
                    .Where(d => d.Prospecto_Id == prospectoId)
                    .Select(d => new DocumentoModel
                    {
                        prospectoId = d.Prospecto_Id,
                        nombre = d.Nombre,
                        
                    })
                    .ToList();

                return Ok(documentos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    


}
}
