import React, { useState, useDeferredValue } from 'react';

function List(props) {
  const { text } = props;
  const deferredText = useDeferredValue(text);

  return (
    <>
      <div>{deferredText}</div>
    </>
  );
}

function DefferedReact() {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange}/>
      <List text={text}/>
    </div>
  );
}

export { DefferedReact };
