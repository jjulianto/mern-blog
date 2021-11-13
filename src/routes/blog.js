const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog");

router.post(
  "/post",
  [body("title").isLength({ min: 5 }), body("body").isLength({ min: 5 })],
  blogController.createBlogPost
);

router.get("/posts", blogController.getAllBlogPost);

module.exports = router;
