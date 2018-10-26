# Node Modules

## What is a Module

Every file in a Node is a module. All Variables and funcitons defined in a file are private to the module, unless they are exported.

- [Global Objects](https://nodejs.org/api/globals.html#globals_global)
  Node.js global objects are global in nature and they are available in all modules. We do not need to include these objects in our application, rather we can use them directly. These objects are modules, functions, strings and object itself as explained below.

  - [\_\_dirname](https://nodejs.org/api/modules.html#modules_dirname)
  - [\_\_filename](https://nodejs.org/api/modules.html#modules_filename)
  - [exports](https://nodejs.org/api/modules.html#modules_exports)
  - [module](https://nodejs.org/api/modules.html#modules_module)
  - [require()](https://nodejs.org/api/modules.html#modules_require)

**Demo:**

- [Global Objects](https://github.com/icosta-cci/nodejs/tree/master/2_NodeModules/1_GlobalObjects.js)
- [Global Objects](https://github.com/icosta-cci/nodejs/tree/master/2_NodeModules/2_GlobalObjects.js)

## Creating a Module

The contents of a file with .js extension become a module.

```javascript
var appName = 'ABC Logger';

function log(message) {
  console.log(`${appName}:${message}`);
}
```

The above modules variables and functions will not be accessible outside the file. In order to make it accessible by other files it should be exported.

## Exporting a Module

```javascript
var appName = 'ABC Logger';

function log(message) {
  console.log(`${appName}:${message}`);
}

module.exports.log = log;
module.exports.appName = appName;
```

The `module.exports` exposes the variables/functions to other modules.

**module.exports.log = log;**
**module.exports.appName=appName;**

If you want to export only a single function:
`module.exports = log;`

To export lots of variables/functions you can use the below syntax

```javascript
module.exports.log = log;
```

## Using a Custom Module

```javascript
module.exports = {
  log,
  appName
};
```

Demo:[Creating,Exporting & Using a Module](https://github.com/icosta-cci/nodejs/tree/master/2_NodeModules/modules/app.js)
Demo: How Node wraps a module?

```Javascript
var x=;

(function (exports, require, module, __filename, __dirname) { var x=;
```

## Using a System Modules

To import a System module you need to specify the module name instead of the filePath name.

Below are some examples of System Modules available in nodeJs

- OS Module
- File System Module
- Path Module

### OS Module

Node.js os module provides a few basic operating-system related utility functions. This module can be imported using the following syntax.

```javascript
var os = require('os');
```

Some methods exposed by os module

**os.hostname()** Returns the hostname of the operating system.
**os.type()** Returns the operating system name.
