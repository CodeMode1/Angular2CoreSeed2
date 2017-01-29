using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Angular2CoreSeed.Models;

namespace Angular2CoreSeed.Migrations
{
    [DbContext(typeof(DemoAppContext))]
    [Migration("20170126183812_Temp_Migration")]
    partial class Temp_Migration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Angular2CoreSeed.Models.Weather", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<DateTime>("Date");

                    b.Property<string>("DateFormatted");

                    b.Property<string>("Name");

                    b.Property<string>("Summary");

                    b.Property<int>("TempC");

                    b.HasKey("Id");

                    b.ToTable("Weathers");
                });
        }
    }
}
