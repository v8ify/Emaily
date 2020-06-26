require("dotenv").config();
const requireLogin = require("../middlewares/requireLogin");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = function (app) {
  app.post("/api/stripe", requireLogin, async function (req, res) {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "inr",
      description: "$5 for 5 credits",
      source: req.body.id,
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
