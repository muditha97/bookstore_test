import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "../backend/routes/booksRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

//allow all orgins
app.use(cors());

//allow custom origins
// app.use(cors({
//   origin:'http://localhost:3000',
//   methods:['GET','POST','PUT','DELETE'],
//   allowedHeaders:['Content-Type']
// }))

app.use("/books", booksRoute);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN stack tutorial");
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
