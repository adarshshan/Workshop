const express = require("express");
const { router } = require("./routes/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("the app is working");
});

app.use("/user", router);

app.listen(PORT, () => console.log("app is running in the port 3000"));
