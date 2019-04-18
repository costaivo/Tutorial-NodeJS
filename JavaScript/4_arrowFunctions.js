//Example 1
function doubleTheNumber(a)
{
   return a*2;
}

console.log(doubleTheNumber(2))

//doubleTheNumber =(a)=>{return a*2;}

//console.log(doubleTheNumber(4))

//doubleTheNumber =a=>a*2;

//console.log(doubleTheNumber(5))

var student ={
    name : 'Keith',
    dob:'01-01-1990',
    standard:'5'
}

// function printStudent (student){
//     return (`Student Name :${student.name}
//     Date of Birth: ${student.dob}
//     Standard     : ${student.standard} `)
// }
// const printStudent=(student)=>{
//     return (`Student Name :${student.name}
// Date of Birth: ${student.dob}
// Standard     : ${student.standard} `)

// }

const printStudent=student=>(`Student Name :${student.name}
Date of Birth: ${student.dob}
Standard     : ${student.standard} `)



console.log(printStudent(student));