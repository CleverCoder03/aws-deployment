import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState({
  demonstration: "",
  message: "",
  working: []
});
  useEffect(() => {
    fetch("http://34.228.21.142:5500/api")
      .then((res) => res.json())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <div
        className="flex-container"
        >
          <h1 style={{ fontSize: "4vw", lineHeight: "0.2" }}>
            React + Docker + AWS
          </h1>
          <h3 style={{ width: "50vw" }}>
            A simple full-stack setup showcasing Dockerized React frontend and
            Express backend, deployed on an AWS EC2 Linux server
          </h3>
        </div>
        <div
          className="flex-container"
          style={{margin: "3vw 0" }}
        >
          <h2
            style={{ fontSize: "2.5vw", lineHeight: "0.2", color: "#ea8f20"}}
          >
            What this project Demonstrates?
          </h2>
          <h4 style={{ width: "70vw" }}>{message.demonstration}</h4>
        </div>
        {/* <div
          className="flex-container"
        >
          <h2
            style={{ fontSize: "2.5vw", lineHeight: "0.2", color: "#ea8f20" }}
          >
            Data fetched from backend
          </h2>
          <h4 style={{ width: "70vw" }}>{message.message}</h4>
        </div> */}
        <div
          className="flex-container"
        >
          <h2
            style={{ fontSize: "2.5vw", lineHeight: "0.2", color: "#ea8f20" }}
          >
            How everything works?
          </h2>
          <div className="card-container">
            {message.working.map((item) => (
              <div key={item.id} style={{width: "25vw", border: "1px solid #fff", padding: "1vw", borderRadius: "10px"}}>
                <h3>{item.id}. {item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
