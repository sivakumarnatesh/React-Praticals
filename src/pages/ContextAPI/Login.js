import React, { useContext, useState } from "react";
import { AdminContext } from "./CreateContext";

export const Login = () => {
  const { setShowDashboard, setEmail, setPassword, email, password } =
    useContext(AdminContext);

  const handleOnChange = (e) => {
    const { name, value } = e?.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDashboard(true);

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email </label><br/>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
        /><br/>
        <label>Password </label><br/>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
        /><br /><br/>
        <input type="submit" />
      </form>
    </div>
  );
};
