import React, { useState } from "react";

//toggle button by clicking button name should change on/off
export function ToggleBtn() {
  const [toggle, setToggle] = useState(false);
  return (
    <button onClick={() => setToggle(!toggle)}>{toggle ? "OFF" : "ON"}</button>
  );
}

//Live paragraph with out using e.target.value directly should directly access the value
export function LiveParagraph() {
  const [text, setText] = useState("");

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={text} />
      <p>{text}</p>
    </div>
  );
}
