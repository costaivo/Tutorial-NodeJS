const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'UserApp> '
});

printMenu();

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case '1':
     listAllUserProfiles();
      break;
    case '2':
      readUserProfileData();
      break;
    case '3':
      updateUserProfileData();
      break;
    case '4':
      console.log('Exiting Application');
      process.exit();
      break;
    default:
     console.log('Invalid option selected!!');
     printMenu();
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

function printMenu(){
    readline.clearScreenDown(process.stdout);
    console.log('*****User Profile App*****')
    console.log('Press the menu options to select operation')
    console.log('1. List All user Profile')
    console.log('2. Add new Profile')
    console.log('3. Update existing profile')
    console.log('4. Exit')
    console.log('**************************')
}

function listAllUserProfiles(){
    console.log( 'List all UserProfiles');
}

function readUserProfileData(){
    console.log( 'Enter user Name:');

}

function updateUserProfileData(){
    console.log( 'read user profile');
}