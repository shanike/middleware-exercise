module.exports = function (req, res, next) {
    // check that name's length is bigger than 1 and is a-zA-Z (spaces allowed) 
    // check that age is a number
    if (req.method !== "POST") {
        next()
        return;
    }

    const { name, age } = req.body
    if (name && name.trim() && name.trim().length > 1 && nameRegex.test(name)) {
        if (age && ageRegex.test(age)) {
            next()
            return;
        }
        else {
            next({ message: "לא נראה לי שזה הגיל שלך" })
            return;
        }
    }
    else {
        next({ message: "לא אהבתי את השם" })
        return;
    }
}

const nameRegex = /^[A-Za-z ]*$/
const ageRegex = /^[1-9][0-9]*$/