using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular2CoreSeed.Migrations
{
    public partial class FieldCountryWeather : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Region",
                table: "Trips",
                newName: "Country");

            migrationBuilder.DropColumn(
                name: "DateFormatted",
                table: "Weathers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Country",
                table: "Trips",
                newName: "Region");
        }
    }
}
