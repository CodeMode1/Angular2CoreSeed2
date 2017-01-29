using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Angular2CoreSeed.Models;
using Microsoft.EntityFrameworkCore;
using Angular2CoreSeed.Services;

namespace Angular2CoreSeed
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // transient : new instance of the service created for each request
            // scoped : same instance of the debug service for each same request
            // singleton : same instance for all the app

            // Add DbContext services for the app so it can connect to a db instance with ConnectionString
            services.AddDbContext<DemoAppContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Ng2CoreSeed")));

            // <TService, TImplementation> 
            // dependency injection layer that specifies on what kind of objects will be used the service(interface) injected
            services.AddScoped<IWeatherRepository, WeatherRepository>();

            // new instance created for each request
            services.AddTransient<DemoAppContextSeed>();

            services.AddLogging();

            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, 
            ILoggerFactory loggerFactory, DemoAppContextSeed seeder)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });

            // Wait, car la methode EnsureSeedData est async, donc on n'attend pas une rep immediatement
            seeder.EnsureSeedData().Wait();
        }
    }
}
