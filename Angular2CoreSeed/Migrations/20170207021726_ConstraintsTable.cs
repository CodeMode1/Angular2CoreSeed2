using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular2CoreSeed.Migrations
{
    public partial class ConstraintsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Constraint_Weathers_WeatherId",
                table: "Constraint");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Constraint",
                table: "Constraint");

            migrationBuilder.RenameTable(
                name: "Constraint",
                newName: "Constraints");

            migrationBuilder.RenameIndex(
                name: "IX_Constraint_WeatherId",
                table: "Constraints",
                newName: "IX_Constraints_WeatherId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Constraints",
                table: "Constraints",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Constraints_Weathers_WeatherId",
                table: "Constraints",
                column: "WeatherId",
                principalTable: "Weathers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Constraints_Weathers_WeatherId",
                table: "Constraints");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Constraints",
                table: "Constraints");

            migrationBuilder.RenameTable(
                name: "Constraints",
                newName: "Constraint");

            migrationBuilder.RenameIndex(
                name: "IX_Constraints_WeatherId",
                table: "Constraint",
                newName: "IX_Constraint_WeatherId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Constraint",
                table: "Constraint",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Constraint_Weathers_WeatherId",
                table: "Constraint",
                column: "WeatherId",
                principalTable: "Weathers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
