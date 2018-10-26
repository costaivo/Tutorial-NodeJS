var appName ='ABC Logger';

function log(message){
    console.log(`${appName}:${message}`);
}

module.exports.log = log;
module.exports.appName=appName;