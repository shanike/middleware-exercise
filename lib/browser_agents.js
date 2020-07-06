class BrowserCounter {
    constructor() {
        this.brows = {}
    }
    addBrowser(bro) {
        if (this.brows[bro])
            this.brows[bro]++
        else
            this.brows[bro] = 1
    }

    getTopBro() {
        let maxBro = {}; // { bro: "", count: "" }
        for (let bro in this.brows) {
            if (!maxBro || !maxBro['bro'] || this.brows[bro] > maxBro['count']) {
                maxBro = { bro, count: this.brows[bro] }
            }
        }
        return maxBro;
    }
}

module.exports = new BrowserCounter()