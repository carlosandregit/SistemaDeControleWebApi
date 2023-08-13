using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SistemaControleWebApi.Migrations
{
    /// <inheritdoc />
    public partial class intialMigrations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "fornecedores",
                columns: table => new
                {
                    IdFornecedor = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RazaoSocial = table.Column<string>(type: "TEXT", nullable: false),
                    CNPJ = table.Column<string>(type: "TEXT", nullable: false),
                    UF = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    NomeContato = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_fornecedores", x => x.IdFornecedor);
                });

            migrationBuilder.CreateTable(
                name: "pedidos",
                columns: table => new
                {
                    CodigoPedido = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DtPedido = table.Column<string>(type: "TEXT", nullable: false),
                    Produto = table.Column<int>(type: "INTEGER", nullable: false),
                    QtProduto = table.Column<int>(type: "INTEGER", nullable: false),
                    Fornecedor = table.Column<int>(type: "INTEGER", nullable: false),
                    VlrTotalPedido = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pedidos", x => x.CodigoPedido);
                });

            migrationBuilder.CreateTable(
                name: "produtos",
                columns: table => new
                {
                    Codigo = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Descricao = table.Column<string>(type: "TEXT", nullable: false),
                    DtCadastro = table.Column<string>(type: "TEXT", nullable: false),
                    ValorProduto = table.Column<decimal>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_produtos", x => x.Codigo);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "fornecedores");

            migrationBuilder.DropTable(
                name: "pedidos");

            migrationBuilder.DropTable(
                name: "produtos");
        }
    }
}
