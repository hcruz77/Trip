const router = require('express').Router();
const { User } = require('../models');

router.get('/login', async (req, res) => {
  const userData = await User.findAll();
  const users = userData.map(user => user.get());
  res.render('login', { users });
});

module.exports = router;
