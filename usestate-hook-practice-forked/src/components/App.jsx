import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  function showTime() {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
    console.log(time);
  }

  setInterval(showTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
