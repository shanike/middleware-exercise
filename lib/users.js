class Users {
    constructor() {
        this.users = [] // array of objects
    }
    addUser(user) { // user == {name: name, age: age}
        this.users.push(user)
    }
    getUsers() {
        return this.users
    }
}

module.exports = new Users()