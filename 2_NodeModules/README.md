# Node Modules

## What is a Module
Every file in a Node is a module. All Variables and funcitons defined in a file are private to the module, unless they are exported. 

* [Global Objects](https://nodejs.org/api/globals.html#globals_global)
  Node.js global objects are global in nature and they are available in all modules. We do not need to include these objects in our application, rather we can use them directly. These objects are modules, functions, strings and object itself as explained below.

    * [__dirname](https://nodejs.org/api/modules.html#modules_dirname)
    * [__filename](https://nodejs.org/api/modules.html#modules_filename)
    * [exports](https://nodejs.org/api/modules.html#modules_exports)
    * [module](https://nodejs.org/api/modules.html#modules_module)
    * [require()](https://nodejs.org/api/modules.html#modules_require)


**Demo:** 
* [Global Objects](https://github.com/icosta-cci/nodejs/tree/master/2_NodeModules/1_GlobalObjects.js) 
* [Global Objects](https://github.com/icosta-cci/nodejs/tree/master/2_NodeModules/2_GlobalObjects.js)
  
## Creating a Module
  
## Exporting a Module
  
## Using a Custom Module
Demo:[Creating,Exporting & Using a Module](https://github.com/icosta-cci/nodejs/tree/master/2_NodeModules/modules/app.js)

## Using a  System Module