/************************************************************
*  The file name of the current module
***********************************************************/
console.log(__filename);

/************************************************************
* The directory name of the current module
***********************************************************/
console.log(__dirname)


/************************************************************
* The Console is also a global object
***********************************************************/
console.log('Console');


/************************************************************
* The setTimeout(cb, ms) global function is used to run callback cb after  ms milliseconds.
***********************************************************/
function printHello() {
    console.log( "Hello NodejS");
 }
 
 // Now call above function after 3 seconds
 setTimeout(printHello, 3000);