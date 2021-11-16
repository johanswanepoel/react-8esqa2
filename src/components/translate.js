import React from 'react';

export default function Translate(props) {
  const { text, language } = props;

  const languages = {
    ru: 'Russian',
  };

  return (
    <div>
      <p>Translated from {languages[language]}:</p>
      <p>{text}</p>
    </div>
  );
}
