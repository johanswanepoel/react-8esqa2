import React, { useState } from 'react';
import './style.css';
import Field from './components/field';
import Languages from './components/languages';
import Translate from './components/translate';

export default function App() {
  const [language, setLangage] = useState('ru');
  const [text, setText] = useState('');

  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLangage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
