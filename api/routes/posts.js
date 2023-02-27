const express = require("express");
const {
  getPost,
  getPosts,
  addPost,
  deletePost,
  updatePost,
} = require("../controllers/post");

const router = new express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
