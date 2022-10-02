const router = require("express").Router();
const { User } = require("../models");


router.get("/", async (req, res) => {
  try {
    console.log(req.session.loggedIn);
    if (!req.session.loggedIn) {
      return res.render('homepage')
    }
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));
     return res.render('homepage', {
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

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("SignUp");
});

router.get('/', async (req, res) => {
  try {
    res.render('logIn')
  } catch (err){
    res.status(500).json(err)
  }
})

module.exports = router;
