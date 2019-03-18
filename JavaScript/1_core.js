//Variables
var name = 'Ivo';

console.log('Name:', name);

var age = 11;
var hasGithubAccount = false;

console.log('Age :' ,age);

console.log('Has GitHub Account :',hasGithubAccount)


function printUserSummary(){
    var githubStatus = hasGithubAccount? 'has github account':'does not have github account';

    return (`Your Name is ${name} , age is ${age}. ${githubStatus}`)
}

function printUserSummary(userName,userAge,userGitHubStatus){
    var githubStatus = userGitHubStatus? 'has github account':'does not have github account';

    return (`Your Name is ${userName} , age is ${userAge}. ${githubStatus}`)
}

console.log(printUserSummary())
console.log(printUserSummary('Nathan',18,true))
//Conditions

