using Microsoft.EntityFrameworkCore;
using SistemaControleWebApi.Models.Request;

namespace SistemaControleWebApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opts)
           : base(opts)
        {

        }
        public DbSet<Pedido> pedidos { get; set; }
        public DbSet<Produto> produtos { get; set; }
        public DbSet<Fornecedor> fornecedores { get; set; }
    }
}
