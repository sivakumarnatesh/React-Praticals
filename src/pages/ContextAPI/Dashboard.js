import React, { useContext } from "react";
import { AdminContext } from "./CreateContext";

export const Dashboard = () => {
  const { email, password } = useContext(AdminContext);
  return (
    <div>
      <div>Email: {email}</div>
      <div>Password: {password}</div>
    </div>
  );
};
