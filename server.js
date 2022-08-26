const express = require("express");
const mongoose = require("mongoose");
const app = express();
const placesRouter = require("./routes/places");

const DB_URI =
    "mongodb+srv://erick_paul:test1234@cluster0.bhdvtow.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(DB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/places", placesRouter);

app.listen(process.env.PORT || 8000);
