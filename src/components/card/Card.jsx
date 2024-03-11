import styles from './card.module.css'
import WordsChange from './WordsChange';

function Card(props){
    const words = [
        {
            "id":"15279",
            "english":"orange",
            "transcription":"[orange]",
            "russian":"оранжевый",
            "tags":"Colors",
            "tags_json":"[ \"Цвета\"]"},
        {
            "id":"15281",
            "english":"lesson",
            "transscription":"[lesson]",
            "russian":"урок","tags":"Общие ",
            "tags_json":"[\"General\"]"},
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
    ];
    return(
        <div className={styles.card}>
                  {
                  words.map((word) =>
        <WordsChange key={word.id} word={word.english} />
      )}
        </div>
    )
};
export default Card;
