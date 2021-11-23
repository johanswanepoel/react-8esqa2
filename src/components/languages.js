import React from 'react';

export default function Languages({ onLanguageChange, languages }) {
  const resolveLanguage = (e) => {
    const lang = languages.find((lang) => lang.code === e.currentTarget.value);
    onLanguageChange(lang);
  };

  return (
    <div>
      <h1>Select a language</h1>
      <select onChange={resolveLanguage} name="" id="">
        {languages.map(({ code, display }) => (
          <option key={code} value={code}>
            {display}
          </option>
        ))}
      </select>
    </div>
  );
}
