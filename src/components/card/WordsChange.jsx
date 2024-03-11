import React, {useState} from 'react';

const WordsChange = ({word})=>{
    const [showTranslation, setShowTranslation] = useState (false);
    const handleShowTranslation = () => {
        setShowTranslation (true);
      };
      return (
        <div>
          <h3>{word.english}</h3>
          {showTranslation? <p>{word.russian}</p> : <button onClick={handleShowTranslation}>Показать перевод</button>}
        </div>
      );
    };
    export default WordsChange;