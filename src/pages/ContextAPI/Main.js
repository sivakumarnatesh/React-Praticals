import React, { useState } from "react";
import { AdminContext } from "./CreateContext";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";

export const Main = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AdminContext.Provider
      value={{ setShowDashboard, setEmail, setPassword, email, password }}
    >
      {showDashboard ? <Dashboard /> : <Login />}
    </AdminContext.Provider>
  );
};
