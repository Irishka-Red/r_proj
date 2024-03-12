import React, {useState} from 'react';
import styles from './card.module.css'

const Card = ({ words }) => {
const [currentIndex, setCurrentIndex] = useState(0);
const [showTranslation, setShowTranslation] = useState (false);
const currentWord = words[currentIndex];

const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex ===words.length - 1? 0: prevIndex + 1));
    setShowTranslation (false);
};

const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ?words.length - 1 : prevIndex - 1));
    setShowTranslation (false);
};

const handleShowTranslation = () => {
    setShowTranslation (true);
};

return (
    <div className={styles.carousel}>
    <button className={styles.button} onClick={handlePrevious}>Назад</button>
    <div className={styles.card}>
        <h2>{currentWord.english}</h2>
        {showTranslation && <p>{currentWord.russian}</p>}
        <button className={styles.button} onClick={handleShowTranslation}>Показать перевод</button>
    </div>
    <button className={styles.button} onClick={handleNext}>Вперед</button>
    </div>
);
};

Card.defaultProps = {
words: [
        {
            "id":"15286",
            "english":"test",
            "transcription":"[test]",
            "russian":"тест ",
            "tags":"General",
            "tags_json":"[\"General\"]"},
        {
            "id":"15289",
            "english":"cat",
            "transcription":"[kæt] ",
            "russian":"кошка",
            "tags":"Животные",
            "tags_json":"[\"Животные\"]"},
        {
            "id":"15291",
            "english":"flower", 
            "transcription":"[flower]",
            "russian":"цветок",
            "tags":"General",
            "tags_json":"[\"General\"]"},
        {
            "id":"15297", 
            "english":"love",
            "transcription":"[lʌv]",
            "russian":"любовь",
            "tags":"General",
            "tags_json":"[\"General\"]"
        }
    ] 
};

export default Card;
