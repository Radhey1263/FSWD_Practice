# FSWD_Practice

# TaskApp – ExpressJS & AngularJS

A full-stack Task Management app demonstrating:
- **ExpressJS** – Server, Middlewares & REST APIs
- **AngularJS** – MVC Architecture & HTTP Services

---

## Project Structure

```
taskapp/
├── server.js            ← Express server + REST APIs
├── package.json
└── taskApp/
    ├── view.html        ← AngularJS frontend (HTML + directives)
    └── module.js       ← AngularJS module & controller ($http calls)
    └── angular.js
```

---

## Setup & Run

```bash
# 1. Install dependencies
npm install express --save

# 2. Start the server
node server.js

# 3. Open in browser
http://localhost:4000
```

---

## REST API Endpoints

| Method | Endpoint                  | Description        |
|--------|---------------------------|--------------------|
| GET    | `/api/taskData`           | Fetch all tasks    |
| POST   | `/api/addTask`            | Add a new task     |
| PUT    | `/api/updateTask/:id`     | Update a task      |
| DELETE | `/api/deleteTask/:id`     | Delete a task      |

---

## Features
- View all tasks in a table
- Add new tasks (Task ID, Task Name, Status)
- Edit existing tasks (pre-fills the form)
- Delete tasks
- Status options: Started / In Progress / Completed
- Success messages shown in the Message bar
