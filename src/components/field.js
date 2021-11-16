import React from 'react';

export default function Field(props) {
  const { label } = props;
  return (
    <div>
      <label htmlFor="translationText">{label}</label>
      <br />
      <input type="text" />
    </div>
  );
}
