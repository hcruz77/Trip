const router = require('express').Router();
const { User } = require('../../models');
const fs = require('fs');


router.get('/', async (req,res) => {
  try {
    const userData = await User.findAll()
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err 
    ? console.error(err) 
    : console.info(`\nData written to ${destination}`)
  );

  const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };

  router.post('/api/SignUp', (req, res) => {

    const {name, email} = req.body;

    if (name && email) {
      const newNote = {
        // id: uniqid (),
        name,
        email,
      };
      readAndAppend(newNote, '../../seeds/userData.json');
      res.json('note added!');
    }
  })
  

  module.exports = router

  