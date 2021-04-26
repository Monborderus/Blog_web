const express = require("express");
const posts = require("../mocked-data/posts.js");

const router = express.Router();

router.get("/", async (req, res) => {
  return res.send({
    posts,
  });
});

module.exports = router;
