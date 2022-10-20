//import specific props from the module
const {readFileSync,writeFileSync} = require('fs');
//same as --> const fs = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
// const first = fs.readFileSync('./content/first.txt','utf-8');
// const second = fs.readFileSync('./content/second.txt','utf-8');

console.log(first);
console.log(second);


//creates a new file in the provided 
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second},`,{flag:'a'}
);

console.log('done with the task');
console.log('starting the next one');

// const result = readFileSync('./content/result-sync.txt','utf-8');
// console.log(result);


