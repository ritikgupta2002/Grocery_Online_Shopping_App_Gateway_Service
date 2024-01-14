const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Hello from root " });
});

app.listen(8000, () => {
  console.log("root is Listening to Port 8000");
});
