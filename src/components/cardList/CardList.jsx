import React, { useState } from 'react';
import CardForm from './CardForm';
import jsonData from "../../data.json";
import styles from "./cardList.module.css";
 
function CardList() {
    const [wordsData, setwordsData] = useState(jsonData);
    const [isFormValid, setIsFormValid] = useState(false);
 
    const tableRows = wordsData.map((info) => {
        return (
            <tr key={info.id}>
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

    const handleFormChange = (isValid) => {
        setIsFormValid(isValid);
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
            <CardForm func={addRows} onChange={handleFormChange} />
            {!isFormValid && <p>Please fill in all fields</p>}
        </div>
    );
}
 
export default CardList;