import React, { useEffect, useState } from "react";
import "./signal.scss";

function SignalTask() {
  const [dynamiClass, setDynamiClass] = useState({
    red: "",
    yellow: "",
    green: "",
  });

  useEffect(() => {
    setDynamiClass({
      red: "signalWhite",
      yellow: "signalWhite",
      green: "signalWhite",
    });
    getSignalRed();
  }, []);

  const getSignalRed = () => {
    setDynamiClass((prev) => ({
      ...prev,
      red: "signalRed",
      green: "signalWhite",
    }));
    setTimeout(() => {
      getSignalYellow();
    }, 5000);
  };

  const getSignalYellow = () => {
    setDynamiClass((prev) => ({
      ...prev,
      yellow: "signalYellow",
      red: "signalWhite",
    }));
    setTimeout(() => {
      getSignalGreen();
    }, 5000);
  };

  const getSignalGreen = () => {
    setDynamiClass((prev) => ({
      ...prev,
      green: "signalGreen",
      yellow: "signalWhite",
    }));
    setTimeout(() => {
      getSignalRed();
    }, 5000);
  };
  return (
    <div className="signalBody">
      <div className={dynamiClass?.red}></div>
      <div className={dynamiClass?.yellow}></div>
      <div className={dynamiClass?.green}></div>
    </div>
  );
}

export default SignalTask;
