const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  return res.render("logIn");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  return res.render("SignUp");
});

router.get('/', async (req, res) => {
  try {
   return res.render('homepage')
  } catch (err){
    res.status(500).json(err)
  }
})

module.exports = router;
