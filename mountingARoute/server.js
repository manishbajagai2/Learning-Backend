const express = require('express');

const app = express();

const studentRoute = require('./routes/students');
const teacherRoute = require('./routes/teachers');

app.use('/students',studentRoute)
app.use('/teachers',teacherRoute)

app.listen(3000 ,() => {
    console.log('App running in http://localhost:3000');
})