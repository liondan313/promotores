using System.ComponentModel.DataAnnotations;

namespace ReactAppPromotores.Server.Models.Entities
{
    public class EstatusProspecto
    {
        [Key]
        public long id { get; set; }
        public string estatus { get; set; }     

    }
}
