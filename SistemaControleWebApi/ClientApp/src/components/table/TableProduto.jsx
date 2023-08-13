import styles from '../../../src/pages/Produtos.module.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';

function TableProduto() {

    const [produto, setProduto] = useState([]);

    const [codigo, setCodigo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dtCadastro, setDtCadastro] = useState("");
    const [valorProduto, setValorProduto] = useState("");


    useEffect(() => {
        buscar()
    }, [])


    function buscar() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Produto/Consuta-Produtos", requestOptions)
            .then(response => response.json())
            .then(result => setProduto(result))
            .catch(error => console.log('error', error));
    }    


    function editar(id) {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Produto/Consuta-Produto?codigo=" + id, requestOptions)
            .then(response => response.json())
            .then(result => { setCodigo(result.codigo); setDescricao(result.descricao); setDtCadastro(result.dtCadastro); setValorProduto(result.valorProduto) })
            .catch(error => console.log('error', error));
       
    }


    function deletar(codigo) {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Produto/Deletar-Produto?codigo=" + codigo, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .finally(() => {
                buscar()
            })
            .catch(error => console.log('error', error));
    }

    const handleCodigoChange = (event) => {
        setCodigo(event.target.value);
    };

    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    };

    const handleDtCadastroChange = (event) => {
        setDtCadastro(event.target.value);
    };

    const handleValorProdutoChange = (event) => {
        setValorProduto(event.target.value);
    };

    const handleSalvarClick = () => {

        valida( descricao, dtCadastro, valorProduto);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "codigo": codigo,
            "descricao": descricao,
            "dtCadastro": dtCadastro,
            "valorProduto": valorProduto
        });
        console.log(raw)
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Produto/Alterar-Produto", requestOptions)
            .then(response => response.json())
            .then(result => alert("Alterado com sucesso!"))
            .finally(() => {
                buscar()
            })
            .catch(error => console.log('error', error));
    }

    const handleCriarClick = () => {

        valida( descricao, dtCadastro, valorProduto);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "codigo": 0,
            "descricao": descricao,
            "dtCadastro": dtCadastro,
            "valorProduto": valorProduto
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Produto/Enviar-Produto", requestOptions)
            .then(response => response.json())
            .then(result => alert("Criado com sucesso!"))
            .finally(() => {
                buscar()
            })
            .catch(error => console.log('error', error));
    }

    function valida( descricao, dtCadastro, valorProduto) {
        if ( descricao == '' || dtCadastro == '' || valorProduto == '' ) {
            alert("preencha todos os campos")
        }
    }

    return(
        <>            
            <div hidden>
                <input type="text" value={codigo} onChange={handleCodigoChange} placeholder="codigo" />
            </div>
            <div>
                <label><strong>Descrição do produto</strong></label>
            </div>
            <div>
                <input type="text" value={descricao} onChange={handleDescricaoChange} placeholder="Descrição do produto" />
            </div>
            <div>
                <label><strong>Data do Cadastro</strong></label>
            </div>
            <div>
                <input type="text" value={dtCadastro} onChange={handleDtCadastroChange} placeholder="Data do Cadastro" />
            </div>
            <div>
                <label><strong>Valor do Produto</strong></label>
            </div>
            <div>
                <input type="number" value={valorProduto} onChange={handleValorProdutoChange} placeholder="Valor do Produto" />
            </div>  

            <Row xs={2} md={4} lg={6}>
                Salvar alteração {' '}<button onClick={handleSalvarClick}>Alterar</button>
                Criar produto {' '} <Button onClick={handleCriarClick}>Criar</Button>
                {' '}
            </Row>

            <Container>
                
                <Table>
                    <thead className={styles.thead_dark}>
                        <tr>
                            <th>#</th>
                            <th>Descrição</th>
                            <th>Data do Cadastro</th>
                            <th>Valor do Produto</th>
                            <th>Editar / Deletar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            produto.map(data => (
                                <tr key={data.codigo}>                                    
                                    <td>{data.codigo}</td>
                                    <td>{data.descricao}</td>
                                    <td>{data.dtCadastro}</td>
                                    <td>{data.valorProduto}</td>
                                    <td>
                                        <Button variant="primary" onClick={(e) => editar(data.codigo)} size="lg">Editar</Button>
                                        {' '}
                                        <Button variant="danger" onClick={(e) => deletar(data.codigo)} size="lg">Deletar</Button>
                                    </td>
                                </tr>
                            ))}
                        
                       
                    </tbody>
                </Table>
            </Container>
           
        </>
    )
}

export default TableProduto;