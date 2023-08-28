const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/saveData", (req, res) => {
  const inputData = req.body.nameInput;

  // Create a JSON object
  const jsonData = {
    Name: inputData,
  };

  // Write JSON data to a file
  fs.writeFile("data.json", JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving data.");
    } else {
      res.send("Data saved successfully.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
