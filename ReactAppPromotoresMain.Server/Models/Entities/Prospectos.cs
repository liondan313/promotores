using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactAppPromotores.Server.Models.Entities
{
    public class Prospectos
    {
        [Key]
        public long id { get; set; }
        public string nombre { get; set; }
        public string primer_apellido { get; set; }
        public string segundo_apellido { get; set; }
        public string calle { get; set; }
        public int numero { get; set; }
        public string colonia { get; set; }
        public string codigo_postal { get; set; }
        public string telefono { get; set; }
        public string rfc { get; set; }
        public string prospecto_id { get; set; }

        //public long estatusprospecto_id { get; set; }

        // Llave foránea
        [ForeignKey("EstatusProspecto")]
        public long estatusprospecto_id { get; set; }

        // Propiedad de navegación
        public EstatusProspecto EstatusProspecto { get; set; }



    }
}
