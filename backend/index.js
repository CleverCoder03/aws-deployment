import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:3000"
        // Production URL here
    ],
    credentials: true
}))

app.get("/api", (req,res) => {
    res.json({message: "Hello World, It's my first time"})
})

const PORT = 5500

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server is successfully running")
})