require("dotenv").config();
require("./models/User");
require("./services/passport");
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const bodyParser = require("body-parser");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
