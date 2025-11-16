// contact-route

const router = require("express").Router();
const contactController = require("../../controllers/admin/category-controller");

router.get("/list", contactController.list);

module.exports = router;