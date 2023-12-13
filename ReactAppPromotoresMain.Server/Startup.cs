using Microsoft.AspNetCore.Builder;

namespace ReactAppPromotoresMain.Server
{
    public class Startup
    {
        private readonly string _MyCors = "MyCors";

        // Este método se llama por el tiempo de ejecución. Utiliza este método para agregar servicios al contenedor.
        public void ConfigureServices(IServiceCollection services)
        {

            Console.WriteLine("ENTROOOOOOOOOOOOOOOOOO");
            // Agregar servicios necesarios para CORS
            services.AddCors(options =>
            {
                options.AddPolicy(name: _MyCors, builder =>
                {
                    //builder.WithOrigins("http://localhost:5001/api/prospectos/last");
                    builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
                    .AllowAnyHeader().AllowAnyMethod();

                });

                
            });

            

        }


        public void Configure(IApplicationBuilder app)
        {
            app.UseCors(_MyCors);
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        }
    }
}
