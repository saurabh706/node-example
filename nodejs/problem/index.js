// Please don't change the pre-written code
// Import the necessary modules here
import router from './src/features/tweet/tweet.routes.js';
import express from "express";
const app = express();

// TODO: Refactor these route handlers into tweet.routes.js file using express Router --------->>>>


// -------------->>>>>>>>>>>>>>>>>>>
// middleware for accessing these routes after refactoring
app.use("/api/tweets", router);

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
