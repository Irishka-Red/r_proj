import styles from './header.module.css'

function Header(props){
    return(
        <header className={styles.header}>
            <h1>Изучаем английский язык</h1>
        </header>
    );
}
export default Header;