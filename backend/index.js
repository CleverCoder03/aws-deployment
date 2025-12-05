import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://34.228.21.142:5173",
      "http://34.228.21.142:5174",
      // Production URL here
    ],
    credentials: true,
  })
);

app.get("/api", (req, res) => {
  res.json({
  demonstration: 
    `This is a clean and minimal demonstration of how to build a Dockerized full-stack application using React (Vite) for the frontend and Express.js for the backend. The backend exposes a simple API endpoint that the frontend fetches data from. 
    The entire project is containerized using Docker and deployed on an AWS EC2 Ubuntu VPS using Docker Compose, ensuring a reliable and production-ready environment.`,

  message:
    "🖐️ Hi! I developed this interface using React with Vite. Later, I connected the frontend with an Express and Node.js backend, installed Docker, created images, and configured Docker Compose. I pushed the updated code to GitHub, then cloned the complete repository onto my AWS EC2 VPS. During the process, I configured security groups, fixed CORS issues, and resolved multiple Docker-related errors.",

  working: [
    {
      id: 1,
      title: "React Frontend",
      desc: `Built using Vite for fast development and optimized builds. The frontend sends requests to the Express backend through a simple API endpoint and displays the data dynamically.`
    },
    {
      id: 2,
      title: "Express Backend",
      desc: `The backend exposes an API route (e.g., /api) that returns structured JSON data to demonstrate full-stack connectivity. Express handles routing and provides the data fetched by the frontend.`
    },
    {
      id: 3,
      title: "Docker + AWS Deployment",
      desc: `Both the frontend and backend are containerized using Docker. Docker Compose manages and orchestrates the services. The entire application is deployed on an AWS EC2 Ubuntu VPS, ensuring smooth, consistent, and production-like performance.`
    },
  ]
});

});

const PORT = 5500;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server is successfully running");
});
