const express = require("express")

const route = express.Router()

const teacherList = [
    { name: "Satyasai", college: "DSA" },
    { name: "Anil", college: "Physics" },
    { name: "Bobby", college: "Grammar" },
    { name: "Achausana", college: "Maths" },
]

route.get("/", (req, res) => {
    res.send(teacherList)
})

route.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id) || id < 0 || id > teacherList.length) {
        return res.status(400).send("Invalid index")
    }
    res.send(teacherList[id])
})

module.exports = route;
