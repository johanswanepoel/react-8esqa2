import React, { useState } from 'react';
import './style.css';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

export default function App() {
  const languages = [
    {
      code: 'af',
      display: 'Afrikaans',
    },
    { code: 'de', display: 'German' },
    { code: 'nl', display: 'Dutch' },
  ];

  const [language, setLanguage] = useState(languages[0].code);
  const [text, setText] = useState('');

  const handleTextChange = (text) => setText(text)
  const handleLanguageChange = (language) => setLanguage(language.display)


  return (
    <div>
      <Field label="Enter English" onTextChange={handleTextChange} value={text} />
      <Languages onLanguageChange={handleLanguageChange} languages={languages} language={language}  />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
