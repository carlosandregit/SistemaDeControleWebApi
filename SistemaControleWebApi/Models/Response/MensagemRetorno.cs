namespace SistemaControleWebApi.Models.Response
{
    public class MensagemRetorno
    {
        public MensagemRetorno(List<string> mensage)
        {
            Mensage = mensage;
        }
        public List<string> Mensage { get; set; }
    }
}
