import {FaFacebook ,FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css';

function Footer(){
    return (
        <footer className={ styles.footer}>
            <ul className={ styles.social_list}>
                <li><FaFacebook /></li> 
                <li><FaLinkedin /></li>
                <li><FaInstagram /></li> 
                <li><FaGithub /></li>                
            </ul>
            <p className={ styles.copy_right}> 
                <span>Sistema de Controle</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer;