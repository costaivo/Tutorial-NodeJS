/* To use a external module in your current module you need to use require(<moduleFilePath>)*/
const myLogger = require('./logger');

myLogger.error('I am a Error Message');

myLogger.info('Info Message');

myLogger.warning('This is a Warning Message');

myLogger.success(myLogger.appName);

