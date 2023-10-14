const express = require("express");
const {securedPage} = require('../controllers/SecuredController');
const {protect} = require('../middleware/authMiddleware')
const router = express.Router();


router.route("/").get(protect,securedPage);

module.exports = router;
