import React from "react";
import styles from './cardList.module.css'

function CardList(props){
    return(
        <div className={styles.cardlist}>
            <h1>Список слов</h1>
            <div className={styles.list}>
            <p>English</p>
            <p>Transcription</p>
            <p>Russian</p>
            </div>
            <div className={styles.input}>
            <input type="text" placeholder="English"></input>
            <input type="text" placeholder="Transcription"></input>
            <input type="text" placeholder="Russian"></input>
            </div>
            <div>
            <button>Сохранить</button>    
            </div>
        </div>
    )
}
export default CardList;