using System.ComponentModel.DataAnnotations;

namespace SistemaControleWebApi.Models.Request
{
    public class Produto
    {
        [Key]
        public int Codigo { get; set; }
        public string? Descricao { get; set; }
        public string? DtCadastro { get; set; }
        public string? ValorProduto { get; set; }

    }
}
