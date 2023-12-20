using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ReactAppPromotoresMain.Server.Context;
using System.Globalization;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("NuevaPolitica1", app =>
    {
        app.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});


//CONTROLLERS DB CONTEXT
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer("data source=promotoressrv.database.windows.net; initial catalog=promotores2; user id=liondan313; password=Daniel9238; MultipleActiveResultSets=true"));


var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.

app.UseCors("NuevaPolitica1");

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
