using System.ComponentModel.DataAnnotations;

namespace SistemaControleWebApi.Models.Request
{
    public class Pedido
    {
        [Key]
        public int CodigoPedido { get; set; }
        public string? DtPedido { get; set; }
        public string? Produto { get; set; }
        public int QtProduto { get; set; }
        public string? Fornecedor { get; set; }
        public string? VlrTotalPedido { get; set; }
    }
}
