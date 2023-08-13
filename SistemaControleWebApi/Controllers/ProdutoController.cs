using Microsoft.AspNetCore.Mvc;
using SistemaControleWebApi.Models;
using SistemaControleWebApi.Models.Request;
using SistemaControleWebApi.Repository;
using SistemaControleWebApi.Validator;

namespace SistemaControleWebApi.Controllers
{

    [ApiController]
    [Route("v1/[controller]")]
    public class ProdutoController : Controller
    {
        #region PRIVATE

        private IService _service;

        #endregion

        #region PUBLIC
        public ProdutoController(IService service)
        {
            _service = service;
        }
        #endregion

        [HttpGet]
        [Route("Consuta-Produto")]
        public async Task<ActionResult<dynamic>> ConsutaProduto([FromQuery] int codigo)
        {
            try
            {
                List<string> _retorno = await _service.ValidaAdesaoProduto(codigo);
                if (_retorno.Count > 0)
                    return BadRequest(_retorno);              
                else
                {
                    var _envioAdesao = await _service.GetAdesaoProduto(codigo);
                    return _envioAdesao;
                }                    
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        

        [HttpGet]
        [Route("Consuta-Produtos")]
        public async Task<ActionResult<dynamic>> ConsutaProdutos()
        {
            try
            {
                var _retornoAdesao = await _service.GetAdesaoProdutos();
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
        [Route("Enviar-Produto")]
        public async Task<ActionResult<dynamic>> EnviarProduto([FromBody] Produto model)
        {
            try
            {
                var _envioAdesao = await _service.EnviarAdesaoProduto(model);
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
        [Route("Alterar-Produto")]
        public async Task<ActionResult<dynamic>> AlterarProduto([FromBody] Produto model)
        {
            try
            {
                List<string> _retorno = await _service.ValidaAdesaoProduto(model.Codigo);
                if (_retorno.Count > 0)
                    return BadRequest(_retorno);
                else
                {
                    var _alterarAdesao = await _service.AlterarAdesaoProduto(model);
                    return Ok(_alterarAdesao);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpDelete]
        [Route("Deletar-Produto")]
        public async Task<ActionResult<dynamic>> DeletarProduto([FromQuery] int codigo)
        {
            try
            {
                List<string> _retorno = await _service.ValidaAdesaoProduto(codigo);
                if (_retorno.Count > 0)
                    return BadRequest(_retorno);
                else
                {
                    var _deletarAdesao = await _service.DeletarAdesaoProduto(codigo);
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
