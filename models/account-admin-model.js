// account-admin-model.js

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
	{
		fullName: String,
		email: String,
		password: String,
		status: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("AccountAdmin", schema, "accounts-admin");
