const asyncErrorHandler = require("express-async-handler");

const securedPage = asyncErrorHandler( async(req,res) => {
    res.status(201).json("Page accessed successfully");
})

module.exports = {securedPage};