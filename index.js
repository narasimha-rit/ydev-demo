const express = require("express");
const bp = require("body-parser");
const { router } = require("./routes/call.router.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use("/v1/api/", router);

export const startServer = () => {
  app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`Server started on ${process.env.PORT}`);
  });
};

startServer();
