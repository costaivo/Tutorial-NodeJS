//var x=;
var appName = 'ABC Logger';

function log(message) {
  console.log(`${appName}:${message}`);
}

module.exports = {
  log,
  appName
};
