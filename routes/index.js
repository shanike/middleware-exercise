var express = require('express');
var router = express.Router();

var Users = require('../lib/users')
var BrowserCounter = require('../lib/browser_agents')

/* GET home page. */
router.get('/', function (req, res, next) {
  const topBro = BrowserCounter.getTopBro()
  res.render('index', {
    title: 'Who Am I',
    topBro: typeof topBro == "object" && Object.keys(topBro).length ? topBro : { bro: "---", count: "---" }
  });
});

/* POST home page. */
router.post('/', (req, res, next) => {
  const { name, age } = req.body
  Users.addUser({ age, name })
  req.body.age = ""
  req.body.name = ""
  res.redirect('/users')
})

router.get('/users', (req, res, next) => {
  res.render('users_list', {
    title: "users list",
    users: Users.getUsers()
  })
})

module.exports = router;
