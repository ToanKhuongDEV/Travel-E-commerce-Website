const express = require("express");
require("dotenv").config();
const path = require("path");
const database = require("./config/database");
const clientRoutes = require("./routes/client/index-router");
// ----------------


//setup
const app = express();
const PORT = process.env.PORT || 3000;
database.connect();
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// nhúng route tổng
app.use("/", clientRoutes);

// start server
app.listen(PORT, () => {
	console.log(`server are running! on ${PORT}`);
});
