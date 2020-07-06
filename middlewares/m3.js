const BrowserCounter = require("../lib/browser_agents");

module.exports = function (req, res, next) {
    if (req.method !== "POST") {
        next()
        return;
    }
    console.log(`check browser mw`);
    const bro = req.headers['user-agent']
    BrowserCounter.addBrowser(bro)
    next()
}