// Please don't change the pre-written code
// Import the necessary modules here

import {
    getTweets,
    createTweet,
  } from "./tweet.controller.js";
import express from "express";

const router = express.Router();
router.get("/", getTweets);

router.post("/", createTweet);

export default router;
