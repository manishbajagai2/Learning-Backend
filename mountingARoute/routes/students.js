const express = require('express');

const route = express.Router();

const studentList = [
    {name: 'Manish', college: 'LPU'},
    {name: 'Rimon', college: 'Birla'},
    {name: 'Adwait', college: 'Paru'},
    {name: 'Saktiman', college: 'NIT'}
]

route.get('/', (req, res) => {
    res.send(studentList)
})

route.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    if(isNaN(id) || id < 0 || id > studentList.length){
        return res.status(400).send('Invalid index')
    }
    res.send(studentList[id])
})

module.exports = route;
