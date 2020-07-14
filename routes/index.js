var express = require('express');
var router = express.Router();

var Users = require('../lib/users')


/* GET home page. */
router.get('/', function (req, res, next) {
  const topBro = {} //to be changed to real info abt browser agents
  res.render('index', {
    title: 'Who Am I',
    topBro: typeof topBro == "object" && Object.keys(topBro).length ? topBro : { bro: "---", count: "---" }
  });
});

/* POST from home page. */
router.post('/', (req, res, next) => {
  const { name, age } = req.body
  Users.addUser({ age, name })
  req.body.age = ""
  req.body.name = ""
    res.render('users_list', {
      title: "Users List",
      users: Users.getUsers()
    })
})

module.exports = router;
