var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Diksha",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Rajat",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Message Board", message: messages });
});

module.exports = { router, messages };
