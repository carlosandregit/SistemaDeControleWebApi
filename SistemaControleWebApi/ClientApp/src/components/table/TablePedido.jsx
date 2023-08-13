import styles from '../../pages/Pedidos.module.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';

function TablePedido() {

    const [pedido, setpedido] = useState([]);

    const [codigoPedido, setCodigoPedido] = useState("");
    const [dtPedido, setDtPedido] = useState("");
    const [produto, setProduto] = useState("");
    const [qtProduto, setqtProduto] = useState("");
    const [fornecedor, setFornecedor] = useState("");
    const [vlrTotalPedido, setVlrTotalPedido] = useState("");

 
    useEffect(() => {
        buscar()
    }, [])

    function buscar() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Pedido/Consuta-Pedidos", requestOptions)
            .then(response => response.json())
            .then(result => setpedido(result))
            .catch(error => console.log('error', error));
    }
 

    function editar(id) {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Pedido/Consuta-Pedido?codigo=" + id, requestOptions)
            .then(response => response.json())
            .then(result => { setCodigoPedido(result.codigoPedido); setDtPedido(result.dtPedido); setProduto(result.produto); setqtProduto(result.qtProduto); setFornecedor(result.fornecedor); setVlrTotalPedido(result.vlrTotalPedido) })
            .catch(error => console.log('error', error));

    }

    function deletar(id) {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Pedido/Deletar-Pedido?codigoPedido=" + id, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .finally(() => {
                buscar()
            })
            .catch(error => console.log('error', error));

    }

    const handleCodigoPedidoChange = (event) => {
        setCodigoPedido(event.target.value);
    };

    const handleDtPedidoChange = (event) => {
        setDtPedido(event.target.value);
    };

    const handleProdutoChange = (event) => {
        setProduto(event.target.value);
    };

    const handleQtProdutoChange = (event) => {
        setqtProduto(event.target.value);
    };

    const handleFornecedorChange = (event) => {
        setFornecedor(event.target.value);
    };

    const handleVlrTotalPedidoChange = (event) => {
        setVlrTotalPedido(event.target.value);
    };


    const handleSalvarClick = () => {

        if (dtPedido == '' || produto == '' || qtProduto == '' || fornecedor == '' || vlrTotalPedido == '') {
            alert("preencha todos os campos")
        }
        else {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            console.log(qtProduto)
            var raw = JSON.stringify({
                "codigoPedido": codigoPedido,
                "dtPedido": dtPedido,
                "produto": produto,
                "qtProduto": qtProduto,
                "fornecedor": fornecedor,
                "vlrTotalPedido": vlrTotalPedido
            });

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://localhost:44324/v1/Pedido/Alterar-Pedido", requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .finally(() => {
                    buscar()
                })
                .catch(error => console.log('error', error));
        }

       
    }

    const handleCriarClick = () => {

        if (dtPedido == '' || produto == '' || qtProduto == '' || fornecedor == '' || vlrTotalPedido == '') {
            alert("preencha todos os campos")
        } else {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "codigoPedido": 0,
                "dtPedido": dtPedido,
                "produto": produto,
                "qtProduto": qtProduto,
                "fornecedor": fornecedor,
                "vlrTotalPedido": vlrTotalPedido
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://localhost:44324/v1/Pedido/Enviar-Pedido", requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .finally(() => {
                    buscar()
                })
                .catch(error => console.log('error', error));
        }
        
    }

    return(
        <>
            <div hidden>
                <label><strong>Código pedido</strong></label>
            </div>
            <div hidden>
                <input type="text" value={codigoPedido} onChange={handleCodigoPedidoChange} placeholder="codigo" />
            </div>
            <div>
                <label><strong>Data do pedido</strong></label>
            </div>
            <div>
                <input type="text" value={dtPedido} onChange={handleDtPedidoChange} placeholder="Data do pedido" />
            </div>
            <div>
                <label><strong>Produto</strong></label>
            </div>
            <div>
                <input type="text" value={produto} onChange={handleProdutoChange} placeholder="Produto" />
            </div>
            <div>
                <label><strong>Quantidade de produto</strong></label>
            </div>
            <div>
                <input type="number" value={qtProduto} onChange={handleQtProdutoChange} placeholder="Quantidade de produto" />
            </div>
            <div>
                <label><strong>Fornecedor</strong></label>
            </div>
            <div>
                <input type="text" value={fornecedor} onChange={handleFornecedorChange} placeholder="Fornecedor" />
            </div>
            <div>
                <label><strong>Valor Total do pedido</strong></label>
            </div>
            <div>
                <input type="number" value={vlrTotalPedido} onChange={handleVlrTotalPedidoChange} placeholder="Valor Total do pedido" />
            </div>  

            <Row xs={2} md={4} lg={6}>
                Salvar alteração {' '}<button onClick={handleSalvarClick}>Alterar</button>
                Criar pedido {' '} <Button onClick={handleCriarClick}>Criar</Button>
                {' '}
                {/*Consultar pedidos {' '} <Button onClick={buscar}>Criar</Button>*/}
            </Row>

            <Container>
    
               

                <table>
                    <thead className={styles.thead_dark}>
                        <tr>
                            <th>#</th>
                            <th>Data do pedido</th>
                            <th>Produto</th>
                            <th>Quantidade de produto</th>
                            <th>Fornecedor</th>
                            <th>Valor Total do pedido</th>
                            <th>EDITAR / DELETAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pedido.map(data => (
                                <tr key={data.codigoPedido}>
                                    <td>{data.codigoPedido}</td>
                                    <td>{data.dtPedido}</td>
                                    <td>{data.produto}</td>
                                    <td>{data.qtProduto}</td>
                                    <td>{data.fornecedor}</td>
                                    <td>{data.vlrTotalPedido}</td>
                                    <td>
                                        <Button variant="primary" onClick={(e) => editar(data.codigoPedido)} size="lg">Editar</Button>
                                        {' '}
                                        <Button variant="danger" onClick={(e) => deletar(data.codigoPedido)} size="lg">Deletar</Button>
                                    </td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </Container>
           
        </>
    )
}

export default TablePedido;