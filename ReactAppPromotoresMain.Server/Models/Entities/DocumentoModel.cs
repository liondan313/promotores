using System.ComponentModel.DataAnnotations;

namespace ReactAppPromotoresMain.Server.Models.Entities
{
    public class DocumentoModel
    {
        public long prospectoId { get; set; }
        public string nombre { get; set; }
        public IFormFile archivo { get; set; }

    }

}
