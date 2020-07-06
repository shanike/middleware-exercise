const Users = require("../lib/users");

module.exports = function (req, res, next) {
    if (req.method !== "POST") {
        next()
        return;
    }

    const { age } = req.body
    if (age < 18) {
        const users = Users.getUsers()
        res.render('users_list', {
            title: "אין אקסס!",
            users: !Array.isArray(users) ? [] : users.map(u => ({ name: "חסוי", age: "מצונזר" }))
        })
    } else next()
}