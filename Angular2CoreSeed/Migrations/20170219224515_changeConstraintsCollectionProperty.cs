using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular2CoreSeed.Migrations
{
    public partial class changeConstraintsCollectionProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Constraints_WeatherId",
                table: "Constraints");

            migrationBuilder.CreateIndex(
                name: "IX_Constraints_WeatherId",
                table: "Constraints",
                column: "WeatherId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Constraints_WeatherId",
                table: "Constraints");

            migrationBuilder.CreateIndex(
                name: "IX_Constraints_WeatherId",
                table: "Constraints",
                column: "WeatherId",
                unique: true);
        }
    }
}
