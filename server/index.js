import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/router.js"

const app = express();
const PORT = 5000;
const CONNECTION = "mongodb://localhost/blog";

// setup database connection
mongoose.connect(CONNECTION, (err) => {
    if (err) throw err;
    console.log("Server connected to blog Database")
})

// setup middlewares
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

//setup routes
app.use("/api", router) 

app.listen(PORT, () => {
  console.log(`Blog server listening at http://localhost:${PORT}`);
});
