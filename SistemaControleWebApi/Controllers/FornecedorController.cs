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
    public class FornecedorController : ControllerBase
    {
        #region PRIVATE

        private readonly IService _service;
        #endregion

        #region PUBLIC
        public FornecedorController(IService service)
        {
            _service = service;
        }
        #endregion

        [HttpGet]
        [Route("Consuta-fornecedor")]
        public async Task<ActionResult<dynamic>> ConsutaFornecedor([FromQuery] int idFonecedor)
        {
            try
            {
                List<string> _retorno = await _service.ValidaAdesaoFornecedor(idFonecedor);
                if (_retorno.Count > 0)
                    return BadRequest(_retorno);
                else
                {
                    var _retornoAdesao = await _service.GetAdesaoFornecedor(idFonecedor);
                    return Ok(_retornoAdesao);
                }               
            }
            catch (Exception ex)
            {                
               throw new Exception(ex.Message);
            }
        }

        [HttpGet]
        [Route("Consuta-fornecedores")]
        public async Task<ActionResult<dynamic>> ConsutaFornecedores()
        {
            try
            {
                var _retornoAdesao = await _service.GetAdesaoFornecedores();
                if(_retornoAdesao.Count > 0)
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
        [Route("Enviar-fornecedor")]
        public async Task<ActionResult<dynamic>> EnviarFornecedor([FromBody] Fornecedor model)
        {
            try
            {
                var _envioAdesao = await _service.EnviarAdesaoFornecedor(model);
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
        [Route("Alterar-fornecedor")]
        public async Task<ActionResult<dynamic>> AlterarFornecedore([FromBody] Fornecedor model)
        {
            try
            {
                List<string> _retorno = await _service.ValidaAdesaoFornecedor(model.IdFornecedor);
                if (_retorno.Count > 0)
                    return BadRequest(_retorno);
                else
                {
                    var _alterarAdesao = await _service.AlterarAdesaoFornecedor(model);
                    return Ok(_alterarAdesao);
                }                              
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpDelete]
        [Route("Deletar-fornecedor")]
        public async Task<ActionResult<dynamic>> DeletarFornecedore([FromQuery] int idFornecedor)
        {
            try
            {
                List<string> _retorno = await _service.ValidaAdesaoFornecedor(idFornecedor);
                if (_retorno.Count > 0)
                    return BadRequest(_retorno);
                else
                {
                    var _deletarAdesao = await _service.DeletarAdesaoFornecedor(idFornecedor);
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