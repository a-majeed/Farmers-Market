const fs = require('fs');

// Blocking, sychronous code
//const textIn = fs.readFileSync('./txt/input.txt','utf-8');
//console.log(textIn);
//const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
//fs.writeFileSync('./txt/output.txt', textOut);
//console.log('File written!');


// Non-blocking, asynchronous code
fs.readFile('./txt/start.txt','utf-8',(err, data1) => {
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err, data2) => {
        console.log(data2);
    })
})
