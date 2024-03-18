import React, { useState } from 'react';
import CardForm from './CardForm';
import jsonData from "../../data.json";
import styles from "./cardList.module.css";
 
function CardList() {
    const [wordsData, setwordsData] = useState(jsonData);
 
    const tableRows = wordsData.map((info) => {
        return (
            <tr>
                <td>{info.english}</td>
                <td>{info.transcription}</td>
                <td>{info.translation}</td>
            </tr>
        );
    });
 
    const addRows = (data) => {
        const totalWords = wordsData.length;
        data.id = totalWords + 1;
        const updatedWordsData = [...wordsData];
        updatedWordsData.push(data);
        setwordsData(updatedWordsData);
    };
 
    return (
        <div className={`${styles.cardlist}`}>
            <table className="table">
                <thead>
                    <tr>
                        <th>English</th>
                        <th>Transcription</th>
                        <th>Translation</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
            <CardForm func={addRows} />
        </div>
    );
}
 
export default CardList;