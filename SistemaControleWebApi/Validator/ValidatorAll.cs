using SistemaControleWebApi.Data;
using SistemaControleWebApi.Models.Request;

namespace SistemaControleWebApi.Validator
{
    public interface IValidaFornecedor
    {
        //#region INTERFACE VALIDA FORNECEDOR
        //Task<dynamic> ValidaAdesaoFornecedor(int idFornecedor);
        //#endregion

        //#region INTERFACE VALIDA PRODUTO
        //Task<dynamic> ValidaAdesaoProduto(int codigo);
        //#endregion

        //#region INTERFACE VALIDA PEDIDO
        //Task<dynamic> ValidaAdesaoPedido(int codigo);
        //#endregion
    }
    public class ValidatorAll : IValidaFornecedor
    {
        //#region METODO PRIVATE
        //private DataContext _context;
        //#endregion

        //#region VALIDA FORNECEDOR
        //public async Task<dynamic> ValidaAdesaoFornecedor(int idFornecedor)
        //{
        //    List<string> _mensagemRetorno = new List<string>();

        //    var _retorno = _context.fornecedores.Where(x => x.IdFornecedor == idFornecedor);
        //    if(_retorno == null)
        //        _mensagemRetorno.Add("Adesão não encontrada para Idfornecedor  " + idFornecedor);

        //    return _mensagemRetorno;
        //}
        //#endregion
        
        //#region VALIDA PRODUTO
        //public async Task<dynamic> ValidaAdesaoProduto(int codigo)
        //{
        //    List<string> _mensagemRetorno = new List<string>();

        //    var _retorno = _context.produtos.Where(x => x.Codigo == codigo);
        //    if (_retorno == null)
        //        _mensagemRetorno.Add("Produto não localizado  " + codigo);

        //    return _mensagemRetorno;
        //}
        //#endregion

        //#region VALIDA PEDIDO
        //public async Task<dynamic> ValidaAdesaoPedido(int codigo)
        //{
        //    List<string> _mensagemRetorno = new List<string>();

        //    var _retorno = _context.pedidos.Where(x => x.CodigoPedido == codigo);
        //    if (_retorno == null)
        //        _mensagemRetorno.Add("Pedido não localizado  " + codigo);

        //    return _mensagemRetorno;
        //}
        //#endregion
    }
}
