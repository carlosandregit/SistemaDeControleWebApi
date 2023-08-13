import styles from './Pedidos.module.css';
//import ButtonCreate from '../components/buttons/ButtonCreate';
//import ButtonAlter from '../components/buttons/ButtonAlter';
//import ButtonClean from '../components/buttons/ButtonClean';
//import ButtonDelete from '../components/buttons/ButtonDelete';
import TablePedido from '../components/table/TablePedido';

function Pedidos(){
    return(
        <form className={styles.form}>               
           
             
            {/*<div>*/}
            {/*    <ButtonCreate></ButtonCreate>*/}
            {/*    <ButtonAlter></ButtonAlter>*/}
            {/*    <ButtonClean></ButtonClean>*/}
            {/*    <ButtonDelete></ButtonDelete>*/}
            {/*</div>*/}
            <TablePedido></TablePedido>
    </form>
    )
}

export default Pedidos;