const path = require('path');
const {exec} = require('child_process');

const ROOT_COMMAND = 'git rev-parse --show-toplevel';
const FOLDER_NAME = '.shortcut';

module.exports = function getFolderPath() {
    return new Promise((resolve, reject) => {
        exec(ROOT_COMMAND, (error, stdout, stderr) => {
            error ? reject(stderr) : resolve(path.join(stdout.slice(0, -1), FOLDER_NAME));
        });
    })
}