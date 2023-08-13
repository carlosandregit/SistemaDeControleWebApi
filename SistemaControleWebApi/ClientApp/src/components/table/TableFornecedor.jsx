import styles from '../../pages/Fornecedor.module.css'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
//import axios from 'axios';


function TableFornecedor() {

    const [forncedor, setForncedor] = useState([]);

    const [idFornecedor, setIdFornecedor] = useState("");
    const [nomeContato, setNomeContato] = useState("");
    const [razaoSocial, setRazaosocial] = useState("");
    const [email, setEmail] = useState("");
    const [uf, setUf] = useState("");
    const [cnpj, setCnpj] = useState("");


    const [formData, setFormData] = useState({ razaoSocial: '', email: '', uf: '', cnpj: '', nomeContato: '' });

    useEffect(() => {
        buscar()
    }, [])

    const buscar = async () => {
        fetch("https://localhost:44324/v1/Fornecedor/Consuta-fornecedores")
            .then(res => res.json())
            .then(
                (data) => {
                    setForncedor(data);
                },
                (error) => {
                  
                }
            ).finally(() => {

            })

    }
    function deletar(id) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = "";

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Fornecedor/Deletar-fornecedor?idFornecedor=" + id, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .finally(() => {
                buscar()
            })
            .catch(error => console.log('error', error));

    }
   
    function editar(id) {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Fornecedor/Consuta-fornecedor?idFonecedor=" + id, requestOptions)
            .then(response => response.json())
            .then(result => { setIdFornecedor(result.idFornecedor); setRazaosocial(result.razaoSocial); setCnpj(result.cnpj); setUf(result.uf); setEmail(result.email); setNomeContato(result.nomeContato) })
            .catch(error => console.log('error', error));

    }
    const handleIdFornecedorChange = (event) => {
        setIdFornecedor(event.target.value);
    };

    const handleRazaoSocialChange = (event) => {
        setRazaosocial(event.target.value);
    };

    const handleCnpjChange = (event) => {
        setCnpj(event.target.value);
    };

    const handleUfChange = (event) => {
        setUf(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNomeContatoChange = (event) => {
        setNomeContato(event.target.value);
    };

    const handleSalvarClick = () => {

        valida(razaoSocial, cnpj, email, uf, nomeContato)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "idFornecedor": idFornecedor,
            "razaoSocial": razaoSocial,
            "cnpj": cnpj,
            "uf": email,
            "email": uf,
            "nomeContato": nomeContato
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Fornecedor/Alterar-fornecedor", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .finally(() => {
                buscar()
            })
            .catch(error => console.log('error', error));
    }
    const handleCriarClick = () => {

        valida(razaoSocial, cnpj, email, uf, nomeContato)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "idFornecedor": 0,
            "razaoSocial": razaoSocial,
            "cnpj": cnpj,
            "uf": email,
            "email": uf,
            "nomeContato": nomeContato
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://localhost:44324/v1/Fornecedor/Enviar-fornecedor", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .finally(() => {
                buscar()
            })
            .catch(error => console.log('error', error));
    }

    function valida(razaoSocial, cnpj, email, uf, nomeContato) {
        if (razaoSocial == '' || cnpj == '' || email == '' || uf == '' || nomeContato == '') {
            alert("preencha todos os campos")
        }
    }

    return (
        <>

            <div hidden>
                <label><strong>Código fornecedor</strong></label>
            </div>
            <div hidden>
                <input type="text" value={idFornecedor} onChange={handleIdFornecedorChange} placeholder="Nome" />
            </div>
            <div>
                <label><strong>Razão Social</strong></label>
            </div>
            <div>
                <input type="text" value={razaoSocial} onChange={handleRazaoSocialChange} placeholder="Razão Social" />
            </div>
            <div>
                <label><strong>CNPJ</strong></label>
            </div>
            <div>
                <input type="number" value={cnpj} onChange={handleCnpjChange} placeholder="CNPJ" />
            </div>
            <div>
                <label><strong>UF</strong></label>
            </div>
            <div>
                <input type="text" value={uf} onChange={handleUfChange} placeholder="UF" />
            </div>
            <div>
                <label><strong>Email</strong></label>
            </div>
            <div>
                <input type="text" value={email} onChange={handleEmailChange} placeholder="EMAIL" />
            </div>
            <div>
                <label><strong>Nome</strong></label>
            </div>
            <div>
                <input type="text" value={nomeContato} onChange={handleNomeContatoChange} placeholder="Nome" />
            </div>

            <Row xs={2} md={4} lg={6}>
                Salvar alteração {' '} <button onClick={handleSalvarClick} size="lg">Alterar</button>
                Criar forrnecedores {' '} <Button onClick={handleCriarClick}>Criar</Button>
                {' '}
            </Row>


            <Container className={styles.table}>

                <Table >

                    <thead className={styles.thead_dark}>
                        <tr>
                            <th>#</th>
                            <th>Razão Social</th>
                            <th>CNPJ</th>
                            <th>UF</th>
                            <th>Email</th>
                            <th>Nome</th>
                            <th>Editar / Deletar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            forncedor.map(data => (
                                <tr key={data.idFornecedor}>
                                    <td>{data.idFornecedor}</td>
                                    <td>{data.razaoSocial}</td>
                                    <td>{data.cnpj}</td>
                                    <td>{data.uf}</td>
                                    <td>{data.email}</td>
                                    <td>{data.nomeContato}</td>
                                    <td>
                                        <Button variant="primary" onClick={(e) => editar(data.idFornecedor)} size="lg">Editar</Button>
                                        {' '}
                                        <Button variant="danger" onClick={(e) => deletar(data.idFornecedor)} size="lg">Deletar</Button>
                                    </td>

                                </tr>


                            ))}

                    </tbody>
                </Table>

            </Container>

        </>

    )
}


export default TableFornecedor;