using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Angular2CoreSeed.Models;

namespace Angular2CoreSeed.Migrations
{
    [DbContext(typeof(DemoAppContext))]
    [Migration("20170202223334_ConstraintDbSetAnnotations")]
    partial class ConstraintDbSetAnnotations
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Angular2CoreSeed.Models.Constraint", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Clear");

                    b.Property<int>("FeelsLike");

                    b.Property<int>("Gust");

                    b.Property<int>("Humidity");

                    b.Property<DateTime>("SunRising");

                    b.Property<DateTime>("SunSet");

                    b.Property<int?>("WeatherId");

                    b.Property<int>("Wind");

                    b.HasKey("Id");

                    b.HasIndex("WeatherId");

                    b.ToTable("Constraints");
                });

            modelBuilder.Entity("Angular2CoreSeed.Models.Weather", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Summary");

                    b.Property<int>("TempC");

                    b.HasKey("Id");

                    b.ToTable("Weathers");
                });

            modelBuilder.Entity("Angular2CoreSeed.Models.Constraint", b =>
                {
                    b.HasOne("Angular2CoreSeed.Models.Weather")
                        .WithMany("Constraints")
                        .HasForeignKey("WeatherId");
                });
        }
    }
}
