using System.ComponentModel.DataAnnotations;

namespace ReactAppPromotoresMain.Server.Models.Entities
{
    public class DocumentoProspecto
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public long Prospecto_Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        [MaxLength] // Puedes especificar un tamaño máximo según tus necesidades
        public byte[] Archivo { get; set; }
    }
}
