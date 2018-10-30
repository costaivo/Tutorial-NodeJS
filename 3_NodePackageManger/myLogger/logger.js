const chalk = require('chalk');
const appName = 'ABC Logger';


const log = console.log

function error(message) {
  log(chalk.red.bold(`${appName}:${message}`));
}

function warning(message){
    log(chalk.blue(`${appName}:${message}`));
}

function info(message){
    log(chalk.white(`${appName}:${message}`));
}

function success(message){
    log(chalk.green(`${appName}:${message}`));
}

module.exports = {
 error,
 warning,
 success,
 info,
 appName
};
