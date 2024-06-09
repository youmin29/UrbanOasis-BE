const express = require("express");
const { swaggerUi, specs } = require("./utils/swagger");
require("dotenv").config();
const bodyParser = require("body-parser");

const dashboard = require("./routes/dashboard");

const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/dashboard", dashboard);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
