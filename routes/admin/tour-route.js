// tour-route.js

const router = require("express").Router();
const tourController = require("../../controllers/admin/tour-controller");

router.get("/create", tourController.create);
router.get("/list", tourController.list);
router.get("/trash", tourController.trash);

module.exports = router;
