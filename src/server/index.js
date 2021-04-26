const express = require("express");
const cookieParser = require("cookie-parser");
const postsRoute = require("./routes/posts.route.js");

const port = 8888;

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-dark-token"
  );
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  next();
});

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/posts", postsRoute);

app.listen(port, () => console.log(`Listening on port ${port}...`));
