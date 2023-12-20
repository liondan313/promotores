using Microsoft.EntityFrameworkCore;
using ReactAppPromotores.Server.Models.Entities;
using ReactAppPromotoresMain.Server.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace ReactAppPromotoresMain.Server.Context
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {

        }
        public DbSet<Prospectos> prospectos { get; set; }
        public DbSet<DocumentoProspecto> documentos_prospecto { get; set; }
    }
}
