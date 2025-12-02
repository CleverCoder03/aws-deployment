import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json()).then((data)=> setMessage(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <h1>Senpai</h1>
        <h2>{message}</h2>
      </div>
    </>
  );
}

export default App;
