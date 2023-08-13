using SistemaControleWebApi.Data;
using SistemaControleWebApi.Models.Request;
using SistemaControleWebApi.Models.Response;
using Microsoft.EntityFrameworkCore;

namespace SistemaControleWebApi.Repository
{
    public interface IService
    {
        #region INTERFACE SERVICE FORNECEDOR
        Task<Fornecedor> GetAdesaoFornecedor(int idFornecedor);
        Task<List<Fornecedor>> GetAdesaoFornecedores();
        Task<Fornecedor> EnviarAdesaoFornecedor(Fornecedor model);
        Task<Fornecedor> AlterarAdesaoFornecedor(Fornecedor model);
        Task<dynamic> DeletarAdesaoFornecedor(int idFornecedor);

        #endregion

        #region INTERFACE SERVICE PRODUTO
        Task<Produto> GetAdesaoProduto(int codigo);
        Task<List<Produto>> GetAdesaoProdutos();
        Task<Produto> EnviarAdesaoProduto(Produto model);
        Task<Produto> AlterarAdesaoProduto(Produto model);
        Task<dynamic> DeletarAdesaoProduto(int codigo);
        #endregion

        #region INTERFACE SERVICE PEDIDO
        Task<Pedido> GetAdesaoPedido(int codigo);
        Task<List<Pedido>> GetAdesaoPedidos();
        Task<Pedido> EnviarAdesaoPedido(Pedido model);
        Task<Pedido> AlterarAdesaoPedido(Pedido model);
        Task<dynamic> DeletarAdesaoPedido(int codigo);

        #endregion

        #region INTERFACE VALIDA FORNECEDOR
        Task<dynamic> ValidaAdesaoFornecedor(int idFornecedor);
        #endregion

        #region INTERFACE VALIDA PRODUTO
        Task<dynamic> ValidaAdesaoProduto(int codigo);
        #endregion

        #region INTERFACE VALIDA PEDIDO
        Task<dynamic> ValidaAdesaoPedido(int codigo);
        #endregion
    }
    public class Service : IService
    {
        #region METODO PRIVATE
        private readonly DataContext _context;
        #endregion

        #region METODO PUBLIC
        public Service(DataContext context)
        {
            _context = context;
        }
        #endregion

        #region SERVICE FORNECEDOR
        public async Task<Fornecedor> GetAdesaoFornecedor(int idFornecedor)
        {
            return await _context.fornecedores.FindAsync(idFornecedor);
        }

        public async Task<List<Fornecedor>> GetAdesaoFornecedores()
        {
            return await _context.fornecedores.ToListAsync();
        }

        public async Task<Fornecedor> EnviarAdesaoFornecedor(Fornecedor model)
        {
            Fornecedor fornecedor = new Fornecedor();
            fornecedor.RazaoSocial = model.RazaoSocial;
            fornecedor.CNPJ = model.CNPJ;
            fornecedor.UF = model.UF;
            fornecedor.Email = model.Email;
            fornecedor.NomeContato = model.NomeContato;

            _context.Add(fornecedor);
            await _context.SaveChangesAsync();
            return fornecedor;
        }

        public async Task<Fornecedor> AlterarAdesaoFornecedor(Fornecedor model)
        {
            Fornecedor fornecedor = _context.fornecedores.FirstOrDefault(f => f.IdFornecedor == model.IdFornecedor);

            fornecedor.RazaoSocial = model.RazaoSocial;
            fornecedor.CNPJ = model.CNPJ;
            fornecedor.UF = model.UF;
            fornecedor.Email = model.Email;
            fornecedor.NomeContato = model.NomeContato;

            await _context.SaveChangesAsync();
            return fornecedor;
        }

        public async Task<dynamic> DeletarAdesaoFornecedor(int idFornecedor)
        {
            List<string> _mensagemRetorno = new List<string>();

            Fornecedor fornecedor = _context.fornecedores.FirstOrDefault(f => f.IdFornecedor == idFornecedor);
            _context.Remove(fornecedor);
            await _context.SaveChangesAsync();

            _mensagemRetorno.Add("Fornecedor desligado com sucesso");
            return new MensagemRetorno(_mensagemRetorno);
        }
        #endregion

        #region SERVICE PRODUTO
        public async Task<Produto> GetAdesaoProduto(int codigo)
        {
            return  await _context.produtos.FindAsync(codigo);
        }

        public async Task<List<Produto>> GetAdesaoProdutos()
        {
            return await _context.produtos.ToListAsync();
        }

        public async Task<Produto> EnviarAdesaoProduto(Produto model)
        {
            Produto produto = new Produto();
            produto.Descricao = model.Descricao;
            produto.DtCadastro = model.DtCadastro;
            produto.ValorProduto = model.ValorProduto;   

            _context.Add(produto);
            await _context.SaveChangesAsync();
            return produto;
        }

        public async Task<Produto> AlterarAdesaoProduto(Produto model)
        {
            Produto produto = _context.produtos.FirstOrDefault(f => f.Codigo == model.Codigo);
            produto.Descricao = model.Descricao;
            produto.DtCadastro = model.DtCadastro;
            produto.ValorProduto = model.ValorProduto;

            await _context.SaveChangesAsync();
            return produto;
        }

        public async Task<dynamic> DeletarAdesaoProduto(int codigo)
        {
            List<string> _mensagemRetorno = new List<string>();

            Produto produto = _context.produtos.FirstOrDefault(f => f.Codigo == codigo);
            _context.Remove(produto);
            await _context.SaveChangesAsync();

            _mensagemRetorno.Add("Produto excluido com sucesso");
            return new MensagemRetorno(_mensagemRetorno);
        }
        #endregion

        #region SERVICE PEDIDO
        public async Task<Pedido> GetAdesaoPedido(int codigo)
        {
            return await _context.pedidos.FindAsync(codigo);
        }

        public async Task<List<Pedido>> GetAdesaoPedidos()
        {
            return await _context.pedidos.ToListAsync();
        }

        public async Task<Pedido> EnviarAdesaoPedido(Pedido model)
        {
            Pedido pedido = new Pedido();
            pedido.DtPedido = model.DtPedido;
            pedido.Produto = model.Produto;
            pedido.QtProduto = model.QtProduto;
            pedido.Fornecedor = model.Fornecedor;
            pedido.VlrTotalPedido = model.VlrTotalPedido;
            _context.Add(pedido);
            await _context.SaveChangesAsync();
            return pedido;
        }

        public async Task<Pedido> AlterarAdesaoPedido(Pedido model)
        {
            Pedido pedido = _context.pedidos.FirstOrDefault(p => p.CodigoPedido == model.CodigoPedido);
            pedido.DtPedido = model.DtPedido;
            pedido.Produto = model.Produto;
            pedido.QtProduto = model.QtProduto;
            pedido.Fornecedor = model.Fornecedor;
            pedido.VlrTotalPedido = model.VlrTotalPedido;

            await _context.SaveChangesAsync();
            return pedido;
        }

        public async Task<dynamic> DeletarAdesaoPedido(int codigo)
        {
            List<string> _mensagemRetorno = new List<string>();

            Pedido pedido = _context.pedidos.FirstOrDefault(p => p.CodigoPedido == codigo);
            _context.Remove(pedido);
            await _context.SaveChangesAsync();

            _mensagemRetorno.Add("Pedido excluido com sucesso");
            return new MensagemRetorno(_mensagemRetorno);
        }
        #endregion      

        #region VALIDA FORNECEDOR
        public async Task<dynamic> ValidaAdesaoFornecedor(int idFornecedor)
        {
            List<string> _mensagemRetorno = new List<string>();

            var _retorno = await _context.fornecedores.Where(x => x.IdFornecedor == idFornecedor).ToListAsync();
            if (_retorno.Count <= 0)
                _mensagemRetorno.Add("Adesão não encontrada para Idfornecedor  " + idFornecedor);

            return _mensagemRetorno;
        }
        #endregion

        #region VALIDA PRODUTO
        public async Task<dynamic> ValidaAdesaoProduto(int codigo)
        {
            List<string> _mensagemRetorno = new List<string>();

            var _retorno = await _context.produtos.Where(x => x.Codigo == codigo).ToListAsync();
            if (_retorno.Count <= 0)
                _mensagemRetorno.Add("Produto não localizado para codigo " + codigo);

            return _mensagemRetorno;
        }
        #endregion

        #region VALIDA PEDIDO
        public async Task<dynamic> ValidaAdesaoPedido(int codigo)
        {
            List<string> _mensagemRetorno = new List<string>();

            var _retorno = await _context.pedidos.Where(x => x.CodigoPedido == codigo).ToListAsync();
            if (_retorno.Count <= 0)
                _mensagemRetorno.Add("Pedido não localizado  para codigo " + codigo);

            return _mensagemRetorno;
        }
        #endregion

    }

}
