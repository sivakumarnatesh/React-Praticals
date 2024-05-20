//create simple employee form , enter employee details then submit it will reflect into html table
import React, { useState } from "react";
import './form.scss';

function FormTask() {
  const [tableData, setTableData] = useState([
    {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
    },
  ]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
      });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First name"
          name="firstName"
          onChange={handleOnChange}
          value={formData?.firstName}
          type="text"
        />
        <br />
        <input
          placeholder="Last name"
          name="lastName"
          onChange={handleOnChange}
          value={formData?.lastName}
          type="text"
        />
        <br />
        <input
          placeholder="Age"
          name="age"
          onChange={handleOnChange}
          value={formData?.age}
          type="text"
        />
        <br />
        <select
          name="gender"
          onChange={handleOnChange}
          value={formData?.gender}
        >
            <option value="" disabled></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <input type="submit" />
      </form>

      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Gender</td>
          </tr>
        </thead>
        <tbody>
          {tableData?.length > 0 &&
            tableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.age}</td>
                  <td>{item?.gender}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default FormTask;
