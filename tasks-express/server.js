const express = require("express")

const app = express()

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const fs = require("fs")

let tasks = fs.readFile("./tasks.json", "utf8", (err, data) => {
    if (err) throw err
    tasks = JSON.parse(data)
})

const writeFile = () => {
    fs.writeFile(
        "./tasks.json",
        JSON.stringify(tasks),
        "utf-8",
        (err, data) => {
            if (err) throw err
        }
    )
    console.log("written")
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    let val = req.body.index
    if (val === "") {
        res.redirect("/")
    }
    res.redirect(`http://localhost:3000/tasks/${val}`)
})

app.get("/tasks", (req, res) => {
    res.send(Object.values(tasks))
})

app.post("/tasks", (req, res) => {
    let task = req.body.addTask
    if (task === "") {
        return res.redirect("/")
    }
    tasks[Object.keys(tasks).length + 1] = task
    writeFile()
    res.send(Object.values(tasks))
})

app.get("/tasks/:id", (req, res) => {
    let idData = req.params.id
    if (idData >= 0 && idData < Object.values(tasks).length) {
        res.write(
            `The task with key ${idData} is : \n\n${
                Object.values(tasks)[req.params.id - 1]
            } \n\n`
        )
        res.write(
            `Maximum number of task/keys is ${Object.values(tasks).length}`
        )
        res.end()
    } else {
        res.redirect("/")
    }
})

app.delete("/tasks/:id", (req, res) => {
    delete tasks[req.params.id]
    writeFile()
    res.send(Object.values(tasks))
})

app.listen(3000, (err) => {
    if (err) console.error(err)
    console.log("App running successfully in http://localhost:3000/")
})
