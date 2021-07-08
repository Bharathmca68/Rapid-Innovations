const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const bodyParser = require("body-parser");

const app = express();

const port = 5401;

//middle ware
app.use(bodyParser.json());

app.use("/", routes);

mongoose
  .connect(
    "mongodb+srv://mohan:abcd@cluster0.pwsps.mongodb.net/Testing?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((success) => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  })
  .catch((error) => {
    console.log("Cannot connect to MongoDB: " + error);
  });
