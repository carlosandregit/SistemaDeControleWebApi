import styles from './Produtos.module.css';
import ButtonCreate from '../components/buttons/ButtonCreate';
import ButtonAlter from '../components/buttons/ButtonAlter';
import ButtonClean from '../components/buttons/ButtonClean';
import ButtonDelete from '../components/buttons/ButtonDelete';
import TableProduto from '../components/table/TableProduto';

function Produtos(){
    return(
        <form className={styles.form}>               
            {/*<div>*/}
            {/*    <label><strong>Código</strong></label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input type="text" placeholder="Informe código do produto"/>*/}
            {/*</div> */}
            {/*<div>*/}
            {/*    <label><strong>Descrição</strong></label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input type="text" placeholder="Informe a descrição do produto"/>*/}
            {/*</div> */}
            {/*<div>*/}
            {/*    <label><strong>Data do Cadastro</strong></label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input type="tex" placeholder="Informe a data do cadastro"/>*/}
            {/*</div> */}
            {/*<div>*/}
            {/*    <label><strong>Valor do Produto</strong></label>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <input type="text" placeholder="Informe o valor"/>*/}
            {/*</div>  */}
            {/*<div>*/}
            {/*    <ButtonCreate></ButtonCreate>*/}
            {/*    <ButtonAlter></ButtonAlter>*/}
            {/*    <ButtonClean></ButtonClean>*/}
            {/*    <ButtonDelete></ButtonDelete>*/}
            {/*</div>*/}
            <TableProduto></TableProduto>
                                          
        </form>
    )
}

export default Produtos;