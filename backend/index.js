import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.get("/api", (req,res) => {
    res.json({message: "Hello World, It's my first time"})
})

const PORT = 5500

app.listen(PORT, () => {
    console.log("Server is successfully running")
})