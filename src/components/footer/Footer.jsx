import styles from './footer.module.css'

function Footer (props){
    return(
        <footer className={styles.footer}>
            <button className={styles.button} type="button">Начать</button>
            <button className={styles.button} type="button">Список</button>
        </footer>
    )
}
export default Footer;