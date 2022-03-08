const getFolderPath = require('./getFolderPath');

module.exports = function create(name, command) {
    getFolderPath().then(console.log).catch(console.error);
}