using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Angular2CoreSeed.Migrations
{
    public partial class ConstraintClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Weathers",
                nullable: false);

            migrationBuilder.CreateTable(
                name: "Constraint",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Clear = table.Column<bool>(nullable: false),
                    FeelsLike = table.Column<int>(nullable: false),
                    Gust = table.Column<int>(nullable: false),
                    Humidity = table.Column<int>(nullable: false),
                    SunRising = table.Column<DateTime>(nullable: false),
                    SunSet = table.Column<DateTime>(nullable: false),
                    WeatherId = table.Column<int>(nullable: true),
                    Wind = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Constraint", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Constraint_Weathers_WeatherId",
                        column: x => x.WeatherId,
                        principalTable: "Weathers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Constraint_WeatherId",
                table: "Constraint",
                column: "WeatherId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Constraint");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Weathers",
                nullable: true);
        }
    }
}
