import React, { useState } from 'react';
import Card from './Card';

const Cards = () => {
  const words = [
    {
      "id": "15286",
      "english": "test",
      "transcription": "[test]",
      "russian": "test",
      "tags": "General",
      "tags_json": "[\"General\"]"
    },
    {
      "id": "15289",
      "english": "cat",
      "transcription": "[kæt] ",
      "russian": "cat",
      "tags": "Animals",
      "tags_json": "[\"Animals\"]"
    },
    {
      "id": "15291",
      "english": "flower",
      "transcription": "[flower]",
      "russian": "flower",
      "tags": "General",
      "tags_json": "[\"General\"]"
    },
    {
      "id": "15297",
      "english": "love",
      "transcription": "[lʌv]",
      "russian": "love",
      "tags": "General",
      "tags_json": "[\"General\"]"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordsLearned, setWordsLearned] = useState(0); 
  const currentWord = words[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
  };

  const handleViewTranslation = () => {
    setWordsLearned((prevWordsLearned) => prevWordsLearned + 1);
  };


  return (
    <div>
      <Card word={currentWord} onViewTranslation={handleViewTranslation}  />
      <button onClick={handlePrevious}>Назад</button>
      <button onClick={handleNext}>Вперед</button>
      <p>Изучено слов: {wordsLearned}</p>
    </div>
  );
};

export default Cards;