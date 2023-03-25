const fs = require('fs').promises;

const write = (content) => {
    fs.writeFile('./exercise/answer.txt',content)
    .then(() => {
        console.log('Data written successfully')
    }).catch((err) => {
        console.log(err);
    })
}

Promise.all([
    fs.readFile('./exercise/1.txt'),
    fs.readFile('./exercise/2.txt'),
    fs.readFile('./exercise/3.txt')
]).then(([data1,data2,data3]) => {
    let val = [
        ...data1.toString().split(/\n/g),
        ...data2.toString().split(/\n/g),
        ...data3.toString().split(/\n/g)
    ].sort((a,b) => a-b).join('\n')
    write(val)
}).catch((err) => {
    console.log(err);
})