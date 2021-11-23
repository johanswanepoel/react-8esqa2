import React from 'react';

export default function Translate(props) {
  const { text, language } = props;

  return (
    <div>
      <p>Translated from {language}:</p>
      <p>{text}</p>
    </div>
  );
}
