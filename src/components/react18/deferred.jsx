import React, { useState, useDeferredValue } from "react";

function List(props) {
  const text = props.text;
  const deferredText = useDeferredValue(text);

  console.log('text', text);
  console.log('deferredText', deferredText);
  return (
    <>
      <div>{deferredText}</div>
    </>
  )
}

function DefferedReact() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
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