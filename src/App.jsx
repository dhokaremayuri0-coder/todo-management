
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import TaskListPage from "./pages/TaskListPage";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";

function App() {
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from the backend
    useEffect(() => {
        axios.get("http://localhost:3000/api/tasks")
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching tasks:", error);
            });
    }, []);

    // Add a task
    async function addTask(newTask) {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/tasks",
                newTask
            );

            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<TaskListPage tasks={tasks} />}
                />

                <Route
                    path="/task"
                    element={<TaskListPage tasks={tasks} />}
                />

                <Route
                    path="/task/add"
                    element={<AddTask onAddTask={addTask} />}
                />

                <Route
                    path="/task/:id"
                    element={<TaskDetails tasks={tasks} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
