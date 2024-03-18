import React, { useState } from 'react';
 
function CardForm(props) {
    const [english, setEnglish] = useState('');
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');
 
    const changeEnglish = (event) => {
        setEnglish(event.target.value);
    };
 
    const changeTranscription = (event) => {
        setTranscription(event.target.value);
    };

    const changeTranslation = (event) => {
        setTranslation(event.target.value);
    };
 
 
    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            english,
            transcription,
            translation
        };
        props.func(val);
        clearState();
    };
 
    const clearState = () => {
        setEnglish('');
        setTranscription('');
        setTranslation('');
    };
 
    return (
        <div>
            <label>English</label>
            <input type="text" value={english} onChange={changeEnglish } />
            <label>Transcription</label>
            <input type="text" value={transcription} onChange={changeTranscription} />
            <label>Translation</label>
            <input type="text" value={translation} onChange={changeTranslation} />
            <button onClick={transferValue}>Сохранить</button>
        </div>
    );
}
 
export default CardForm;