import React, { useState, useEffect  } from 'react';
 
function CardForm(props) {
    const [english, setEnglish] = useState('');
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');

    useEffect(() => {
        const isValid = english.trim() !== '' && transcription.trim() !== '' && translation.trim() !== '';
        props.onChange(isValid);
      }, [english, transcription, translation, props]);
 
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
          <input type="text" value={english} onChange={changeEnglish} className={english.trim() === '' ? 'error' : ''} />
          <label>Transcription</label>
          <input type="text" value={transcription} onChange={changeTranscription} className={transcription.trim() === '' ? 'error' : ''} />
          <label>Translation</label>
      <input type="text" value={translation} onChange={changeTranslation} className={translation.trim() === '' ? 'error' : ''} />
      <button onClick={transferValue} disabled={english.trim() === '' || transcription.trim() === '' || translation.trim() === ''}>
        Save
      </button>
    </div>
  );
}
 
export default CardForm;