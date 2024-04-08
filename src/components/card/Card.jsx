import React, { useState, useEffect, useRef } from 'react';
import styles from './card.module.css';

const Card = ({ word, onViewTranslation }) => {
  const [showTranslation, setShowTranslation] = useState (false);
  const TranslationButtonRef = useRef (0);

  const handleShowTranslation = () => {
    setShowTranslation (true);
    onViewTranslation();
  };

  useEffect(() => {
    TranslationButtonRef.current.focus();
    setShowTranslation(false);
  }, [word.english]);

  return (
    <div className={styles.carousel}>
      <div className={styles.card}>
        <h2>{word.english}</h2>
        {showTranslation && <p>{word.russian}</p>}
        <button
          ref={TranslationButtonRef}
          className={styles.button}
          onClick={handleShowTranslation}
        >
          Перевод
        </button>
      </div>
    </div>
  );
};

export default Card;