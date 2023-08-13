using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace SistemaControleWebApi.Models.Request
{
    public class Fornecedor
    {
        [Key]
        public int IdFornecedor { get; set; }
        public string? RazaoSocial { get; set; }
        public string? CNPJ { get; set; }
        public string? UF { get; set; }
        public string? Email { get; set; }
        public string? NomeContato { get; set; }

    }
}
