import styles from './Fornecedor.module.css';
//import ButtonCreate from '../components/buttons/ButtonCreate';
//import ButtonAlter from '../components/buttons/ButtonAlter';
//import ButtonClean from '../components/buttons/ButtonClean';
//import ButtonDelete from '../components/buttons/ButtonDelete';
import TableFornecedor from '../components/table/TableFornecedor';
import React from 'react';
function Fornecedores()
{
    return(
        <form className={styles.form}>               
            {/*<div>*/}
            {/*    <label><strong>Razão Social</strong></label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input className={styles.text_input} type="text" placeholder="Informe a razão social"/>*/}
            {/*</div> */}
            {/*<div>*/}
            {/*    <label><strong>CNPJ</strong></label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input className={styles.text_input} type="text" placeholder="Informe o CNPJ"/>*/}
            {/*</div> */}
            {/*<div>*/}
            {/*    <label><strong>UF</strong></label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input className={styles.text_input} type="tex" placeholder="Informe o UF"/>*/}
            {/*</div> */}
            {/*<div>*/}
            {/*    <label><strong>Email</strong></label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input className={styles.text_input} type="text" placeholder="Informe o email"/>*/}
            {/*</div> */}
            {/*<div>*/}
            {/*    <label><strong>Nome</strong></label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input className={styles.text_input} type="text" placeholder="Informe o nome"/>*/}
            {/*</div>   */}

            {/* <div>*/}
            {/*    <ButtonCreate></ButtonCreate>*/}
            {/*    <ButtonAlter></ButtonAlter>*/}
            {/*    <ButtonClean></ButtonClean>*/}
            {/*    <ButtonDelete></ButtonDelete>*/}
            {/*</div>  */}
            <TableFornecedor ></TableFornecedor>           
        </form>
    )
}

export default Fornecedores;