const express = require("express");
require("dotenv").config();
const path = require("path");
const database = require("./config/database");
const clientRoutes = require("./routes/client/index-router");
const adminRoutes = require("./routes/admin/index-route");
const variableConfig = require("./config/variable");
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
app.use(`/${variableConfig.pathAdmin}`, adminRoutes);
app.use("/", clientRoutes);
app.use((req, res) => {
	res.status(404).render("admin/pages/error-404", {
		pageTitle: "404 Not Found",
	});
});
// Tạo biến toàn cục trong file PUG
app.locals.pathAdmin = variableConfig.pathAdmin;

// start server
app.listen(PORT, () => {
	console.log(`server are running! on ${PORT}`);
});
