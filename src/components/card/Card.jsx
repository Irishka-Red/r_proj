import React, { useState, useEffect, useRef } from 'react';
import styles from './card.module.css';

const Card = ({ word, onViewTranslation }) => {
  const [showTranslation, setShowTranslation] = useState (false);
  const translationButtonRef = useRef (null);

  const handleShowTranslation = () => {
    setShowTranslation (true);
    onViewTranslation();
  };

  useEffect(() => {
    translationButtonRef.current.focus();
    setShowTranslation(false);
  }, [word.english]);

  return (
    <div className={styles.carousel}>
      <div className={styles.card}>
        <h2>{word.english}</h2>
        {showTranslation && <p>{word.russian}</p>}
        <button
          ref={translationButtonRef}
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