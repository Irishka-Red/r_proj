import styles from './header.module.css'

function Header(props){
    return(
        <header className={styles.header}>
            <h1>Learn English</h1>
        </header>
    );
}
export default Header;