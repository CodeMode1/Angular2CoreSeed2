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
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Cookies;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;

namespace Angular2CoreSeed
{
    public class Startup
    {
        private IHostingEnvironment _env;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            _env = env;
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

            // new instance created for each request to configure an admin user
            services.AddTransient<UserIdentityInitializer>();

            services.AddLogging();

            // user / role type
            services.AddIdentity<AppUser, IdentityRole>()
                .AddEntityFrameworkStores<DemoAppContext>();

            services.Configure<IdentityOptions>(config =>
            {
                // gets or sets cookies for an identity event in the app
                config.Cookies.ApplicationCookie.Events =
                    new CookieAuthenticationEvents()
                    {
                        OnRedirectToLogin = (ctx) =>
                        {
                            // when using an api
                            if (ctx.Request.Path.StartsWithSegments("/api") && ctx.Response.StatusCode == 200)
                            {
                                // trying to access ..localhost:port/Account/Login?ReturnUrl=%2Fapi%2FWeather for login (authorize)
                                // identity redirects to Account controller, Login action : this url doesnt exist by default
                                ctx.Response.StatusCode = 401;
                            }
                            return Task.CompletedTask;
                        },
                        OnRedirectToAccessDenied = (ctx) =>
                        {
                            if (ctx.Request.Path.StartsWithSegments("/api") && ctx.Response.StatusCode == 200)
                            {
                                ctx.Response.StatusCode = 403;
                            }
                            return Task.CompletedTask;
                        }
                    };
            });

            services.AddCors(cfg => 
            {
                cfg.AddPolicy("AnyGet", plc =>
                {
                    plc.AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowAnyOrigin();
                });
            });

            services.AddMvc()
                .AddJsonOptions(options => {
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

                // use standard name conversion of properties
                    options.SerializerSettings.ContractResolver =
                        new CamelCasePropertyNamesContractResolver();
                });

            //services.AddMvc(options =>
            //{
            //    if(!_env.IsProduction())
            //    {
            //        options.SslPort = 44383;
            //    }
            //    // Redirect to https if not secure request
            //    options.Filters.Add(new RequireHttpsAttribute());
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, 
            ILoggerFactory loggerFactory, DemoAppContextSeed seeder, UserIdentityInitializer identitySeeder)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = false
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            // identity to protect mvc routes from unauthorized users

            app.UseIdentity();

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

            // identity admin user seeder, different seeders to introduce identity later in the app
            identitySeeder.Seed().Wait();
        }
    }
}
