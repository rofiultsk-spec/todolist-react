import { useState } from "react";
import TodoForm from "./components/TodoForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Belajar React",
      priority: "High",
      status: "To Do",
    },
  ]);

  const [editData, setEditData] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((item) =>
        item.id === updatedTask.id ? updatedTask : item
      )
    );
    setEditData(null);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      default:
        return "success";
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Todo List</h1>

      <TodoForm
        addTask={addTask}
        updateTask={updateTask}
        editData={editData}
      />

      <div className="card mt-4 shadow">
        <div className="card-body">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Task</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((item) => (
                <tr key={item.id}>
                  <td>{item.task}</td>

                  <td>
                    <span
                      className={`badge bg-${getPriorityColor(
                        item.priority
                      )}`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  <td>
                    <span className="badge bg-secondary">
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => setEditData(item)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTask(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;