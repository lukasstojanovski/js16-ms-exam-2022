const fs = require("fs");

const CONFIG_SOURCE =  `${__dirname}/../../config.js`

let config = null;

if(config === null) {
    let file = fs.readFileSync(CONFIG_SOURCE, "utf-8");
    config = JSON.parse(file);
}

const get = (section) => {
    if(!config[section]) {
        throw `"${section}" does not exist`;
    }
    return config[section];
};

module.exports = {
    get
}