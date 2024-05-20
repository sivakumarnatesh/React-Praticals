import React, { useState } from "react";

//By selecting one dropdown
export function DropdownTask() {
  const countries = [
    { name: "Tamil Nadu", cities: ["Madurai", "Chennai", "Coimbatore"] },
    {
      name: "Karnataka",
      cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Udupi"],
    },
  ];
  const [value, setValue] = useState("");
  return (
    <div>
      <select onChange={(e) => setValue(e?.target?.value)} value={value}>
        {countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item?.name}
            </option>
          );
        })}
      </select>

      <select>
        {countries[value]?.cities.map((item, index) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

//Based upon dropdown selection option will show
export const ColorDropdown = () => {
  const colors = ["red", "green", "yellow", "blue"];
  const [dropValue, setDropValue] = useState("");

  return (
    <>
      <select
        value={dropValue}
        onChange={(e) => setDropValue(e?.target?.value)}
      >
        <option value="" disabled></option>
        {colors.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <div>
        {"You have selected " +
          `${dropValue === "" ? " no color" : `${dropValue} color`}`}
      </div>
    </>
  );
};
