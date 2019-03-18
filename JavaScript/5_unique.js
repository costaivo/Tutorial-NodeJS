var inputString ="my name is Ivo Costa";

function getUniqueCharacters(inputStr){
    var uniqueStr="";
    for(var i=0;i<inputStr.length;i++){
        if(uniqueStr.indexOf(inputStr.charAt(i))==-1){
            uniqueStr+=inputStr[i];
        }
    }
    return uniqueStr;
}

var uniqueCharacters=getUniqueCharacters(inputString);
console.log(uniqueCharacters);
console.log(uniqueCharacters.length);