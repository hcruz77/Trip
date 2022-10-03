const router = require("express").Router();
const { User } = require("../models");


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  return res.render("logIn", { loggedIn: req.session.loggedIn });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  return res.render("SignUp", { loggedIn: req.session.loggedIn });
});

router.get('/', async (req, res) => {
  try {
   return res.render('homepage', { loggedIn: req.session.loggedIn });
  } catch (err){
    res.status(500).json(err)
  }
})

module.exports = router;
