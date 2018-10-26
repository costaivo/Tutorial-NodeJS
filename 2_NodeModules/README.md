# Node Modules

## What is a Module

Every file in Node is a module. All Variables and funcitons defined in a file are private to the module, unless they are exported.

- [Global Objects](https://nodejs.org/api/globals.html#globals_global)
  Node.js global objects are global in nature and they are available in all modules. We do not need to include these objects in our application, rather we can use them directly. These objects are modules, functions, strings and object itself as explained below.

  - [\_\_dirname](https://nodejs.org/api/modules.html#modules_dirname)
  - [\_\_filename](https://nodejs.org/api/modules.html#modules_filename)
  - [exports](https://nodejs.org/api/modules.html#modules_exports)
  - [module](https://nodejs.org/api/modules.html#modules_module)
  - [require()](https://nodejs.org/api/modules.html#modules_require)

**Demo:**

- [Global Objects 1](https://github.com/icosta-cci/nodejs/tree/master/2_NodeModules/1_GlobalObjects.js)
- [Global Objects 2](https://github.com/icosta-cci/nodejs/tree/master/2_NodeModules/2_GlobalObjects.js)

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

**Demo:**

- [Creating,Exporting & Using a Module](https://github.com/icosta-cci/nodejs/tree/master/2_NodeModules/modules/app.js)

- How Node wraps a module?

```Javascript
var x=;

(function (exports, require, module, __filename, __dirname) { var x=;
```

## Using a System Modules

To import a System module you need to specify the module name instead of the filePath name.

Below are some examples of System Modules available in nodeJs

- [OS Module](https://nodejs.org/api/os.html)
- [File System Module](https://nodejs.org/api/fs.html)
- [Path Module](https://nodejs.org/api/path.html)

### [OS Module](https://github.com/icosta-cci/nodejs/blob/master/2_NodeModules/systemModules/os.js)

Node.js os module provides a few basic operating-system related utility functions. This module can be imported using the following syntax:

```javascript
const os = require('os');
```

Some methods exposed by os module

**os.hostname()** Returns the hostname of the operating system.
**os.type()** Returns the operating system name.

### [File System Module](https://github.com/icosta-cci/nodejs/blob/master/2_NodeModules/systemModules/fileSystem.js)

Node implements File I/O using simple wrappers around standard POSIX functions. This module can be imported using the following syntax:

```javascript
const os = require('os');
```

Every Method in fs has a **Synchronous** and **Asynchronous** implementation.

> Example: Reading file

```javascript
const fs = require('fs');

// Asynchronous read
fs.readFile('nodejs2018.txt', function(err, contents) {
  if (err) {
    return console.error(err);
  }
  console.log('Asynchronous read: ' + data.toString());
});

// Synchronous read
var contents = fs.readFileSync('nodejs2018.txt');
console.log('Synchronous read: ' + contents.toString());
```

### [Path Module](https://github.com/icosta-cci/nodejs/blob/master/2_NodeModules/systemModules/path.js)

The path module provides utilities for working with file and directory paths. This module can be imported using the following syntax:

```javascript
const os = require('os');
```
