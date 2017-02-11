using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Angular2CoreSeed.Migrations
{
    public partial class NewRelations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Constraints_Weathers_WeatherId",
                table: "Constraints");

            migrationBuilder.DropIndex(
                name: "IX_Constraints_WeatherId",
                table: "Constraints");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Weathers");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Weathers",
                newName: "Hour");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Weathers",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StopId",
                table: "Weathers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "WeatherId",
                table: "Constraints",
                nullable: false);

            migrationBuilder.CreateTable(
                name: "Trips",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Continent = table.Column<string>(nullable: true),
                    Leaving = table.Column<DateTime>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Region = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trips", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Stops",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Arrival = table.Column<DateTime>(nullable: false),
                    City = table.Column<string>(nullable: true),
                    Latitude = table.Column<double>(nullable: false),
                    Leaving = table.Column<DateTime>(nullable: false),
                    Longitude = table.Column<double>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    TripId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stops", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stops_Trips_TripId",
                        column: x => x.TripId,
                        principalTable: "Trips",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Weathers_StopId",
                table: "Weathers",
                column: "StopId");

            migrationBuilder.CreateIndex(
                name: "IX_Constraints_WeatherId",
                table: "Constraints",
                column: "WeatherId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Stops_TripId",
                table: "Stops",
                column: "TripId");

            migrationBuilder.AddForeignKey(
                name: "FK_Constraints_Weathers_WeatherId",
                table: "Constraints",
                column: "WeatherId",
                principalTable: "Weathers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Weathers_Stops_StopId",
                table: "Weathers",
                column: "StopId",
                principalTable: "Stops",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Constraints_Weathers_WeatherId",
                table: "Constraints");

            migrationBuilder.DropForeignKey(
                name: "FK_Weathers_Stops_StopId",
                table: "Weathers");

            migrationBuilder.DropTable(
                name: "Stops");

            migrationBuilder.DropTable(
                name: "Trips");

            migrationBuilder.DropIndex(
                name: "IX_Weathers_StopId",
                table: "Weathers");

            migrationBuilder.DropIndex(
                name: "IX_Constraints_WeatherId",
                table: "Constraints");

            migrationBuilder.DropColumn(
                name: "StopId",
                table: "Weathers");

            migrationBuilder.RenameColumn(
                name: "Hour",
                table: "Weathers",
                newName: "Date");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Weathers",
                nullable: false);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Weathers",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "WeatherId",
                table: "Constraints",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Constraints_WeatherId",
                table: "Constraints",
                column: "WeatherId");

            migrationBuilder.AddForeignKey(
                name: "FK_Constraints_Weathers_WeatherId",
                table: "Constraints",
                column: "WeatherId",
                principalTable: "Weathers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
