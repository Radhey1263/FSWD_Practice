const express = require('express') //function
const app = express() //object

//ExpressJS Middlewares
app.use(express.static('taskApp'))
app.use(express.urlencoded())
app.use(express.json())

let tasks = [
    {taskID:'Task1', taskName:'Submit Assignment', status:'Started'},
    {taskID:'Task2', taskName:'Set Question Paper', status:'In Progress'}
]

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/taskApp/view.html")
})

//API to read task Data
app.get('/api/taskData', (req, res) => {
    res.send(tasks)
})

//API to Insert new Task
app.post('/api/addTask', (req, res) => {
    const taskData = req.body //{taskID:1, taskName:'abc'}
    tasks.push(taskData)
    res.json({message:'Task Added'})
})

app.delete('/api/deleteTask/:id', (req, res) => {
    let id = req.params.id
    let index = tasks.findIndex(tasks => tasks.taskID == id)
    if(index !== -1){
        tasks.splice(index, 1)
        res.json({message:'Task Deleted'})
    } else {
        res.json({message:'Task Not Found'})
    }
})

app.put('/api/updateTask/:id', (req, res) => {
    let id = req.params.id
    let updatedTask = req.body
    let index = tasks.findIndex(tasks => tasks.taskID == id)
    if(index !== -1){
        tasks[index] = updatedTask
        res.json({message:'Task Updated'})
    } else {
        res.json({message:'Task Not Found'})
    }
})

app.listen(4000, () => {
    console.log("Server is running on PORT 4000")
})