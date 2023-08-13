using Microsoft.AspNetCore.Mvc;
using SistemaControleWebApi.Models;
using SistemaControleWebApi.Models.Request;
using SistemaControleWebApi.Models.Response;
using SistemaControleWebApi.Repository;
using SistemaControleWebApi.Validator;

namespace SistemaControleWebApi.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class PedidoController : Controller
    {
        #region PRIVATE

        private IService _service;

        #endregion

        #region PUBLIC
        public PedidoController(IService service)
        {
            _service = service;
        }
        #endregion

        [HttpGet]
        [Route("Consuta-Pedido")]
        public async Task<ActionResult<dynamic>> ConsutaPedido([FromQuery] int codigo)
        {
            try
            {
                List<string> _retorno = await _service.ValidaAdesaoPedido(codigo);                
                if (_retorno.Count > 0)
                    return BadRequest(_retorno);
                else
                {
                    var _envioAdesao = await _service.GetAdesaoPedido(codigo);
                    return _envioAdesao;
                }                   
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpGet]
        [Route("Consuta-Pedidos")]
        public async Task<ActionResult<dynamic>> ConsutaPedidos()
        {
            try
            {
                var _retornoAdesao = await _service.GetAdesaoPedidos();
                if (_retornoAdesao.Count > 0)
                {
                    return Ok(_retornoAdesao);
                }
                else
                {
                    return BadRequest(_retornoAdesao);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost]
        [Route("Enviar-Pedido")]
        public async Task<ActionResult<dynamic>> EnviarPedido([FromBody] Pedido model)
        {
            try
            {
                var _envioAdesao = await _service.EnviarAdesaoPedido(model);
                if (_envioAdesao == null)
                    return BadRequest(_envioAdesao);
                else
                    return _envioAdesao;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPut]
        [Route("Alterar-Pedido")]
        public async Task<ActionResult<dynamic>> AlterarPedido([FromBody] Pedido model)
        {
            try
            {
                List<string> _retorno = await _service.ValidaAdesaoPedido(model.CodigoPedido);
                if (_retorno.Count > 0)
                    return BadRequest(_retorno);
                else
                {
                    var _alterarAdesao = await _service.AlterarAdesaoPedido(model);
                    return Ok(_alterarAdesao);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpDelete]
        [Route("Deletar-Pedido")]
        public async Task<ActionResult<dynamic>> DeletarPedido([FromQuery] int codigoPedido)
        {
            try
            {
                List<string> _retorno = await _service.ValidaAdesaoPedido(codigoPedido);
                if (_retorno.Count > 0)
                    return BadRequest(_retorno);
                else
                {
                    var _deletarAdesao = await _service.DeletarAdesaoPedido(codigoPedido);
                    return Ok(_deletarAdesao);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
