const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    console.log(req.session.loggedIn);
    if (!req.session.loggedIn) {
      return res.render('login')
    }
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));
     res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
      user: req.session.user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("logIn");
});

router.get('/', async (req, res) => {
  try {
    res.render('logIn')
  } catch (err){
    res.status(500).json(err)
  }
})

module.exports = router;
