import React from 'react';

export default function Field(props) {
  const { label, onTextChange } = props;
  return (
    <div>
      <label htmlFor="translationText">{label}</label>
      <br />
      <input onChange={(e) => onTextChange(e.target.value)} type="text" />
    </div>
  );
}
