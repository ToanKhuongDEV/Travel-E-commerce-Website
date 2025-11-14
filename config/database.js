//database.js
const mongoose = require("mongoose");
module.exports.connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Kết nối database thành công!");
	} catch (err) {
		console.log("Kết nối thất bại!");
	}
};
