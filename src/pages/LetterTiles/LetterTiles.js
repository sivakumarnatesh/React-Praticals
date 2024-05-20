import React, { useEffect, useState } from "react";
import "./LetterTiles.scss";

export const LetterTiles = () => {
  const [alphabet, setAlphabet] = useState([]);
  const [selected,setSelected] = useState('');

  useEffect(() => {
    getAlphabets();
  }, []);

  const getAlphabets = () => {
    const tempAlphabet = [];
    for (let i = 1; i <= 26; i++) {
      const letter = String.fromCharCode(i + 96);
      tempAlphabet.push(letter);
    }
    setAlphabet(tempAlphabet);
  };

  const handleClick = (val) => {
    setSelected((prev) => prev+val);
  }

  return (
    <>
    <div className="Letter">
      {alphabet.length > 0 &&
        alphabet.map((item, index) => {
          return (
            <div onClick={() => handleClick(item)} key={index}>
              <div className="SubLetter">{item}</div>
            </div>
          );
        })}
      
    </div>
      <div>{selected}</div>
      </>
  );
};
