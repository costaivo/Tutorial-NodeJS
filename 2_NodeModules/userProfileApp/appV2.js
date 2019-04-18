// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`What's your name?`, (name) => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })


  const inquirer = require('inquirer')
const fs = require('fs');
var questions = [{
  type: 'input',
  name: 'name',
  message: "What's your name?",
},
{
    type: 'input',
    name: 'age',
    message: "What's your age?",   
},
{
    type: 'input',
    name: 'address',
    message: "What's your address?",   
},
]

inquirer.prompt(questions).then(answers => {
  
  console.log(`Hi ${answers['name']}!`)
  console.log(`Your Age is  ${answers['age']}!`)
  console.log(`Your Address is  ${answers['address']}!`)

  const fileName =answers['name'].trim();
  fs.writeFileSync(`${fileName}.txt`,`Name:${answers['name']}
  Age: ${answers['age']}
  Address${answers['address']}`)
})

//https://flaviocopes.com/node-input-from-cli/