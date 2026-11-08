import { useEffect, useState } from "react";

function TodoForm({ addTask, updateTask, editData }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("To Do");

  useEffect(() => {
    if (editData) {
      setTask(editData.task);
      setPriority(editData.priority);
      setStatus(editData.status);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      task,
      priority,
      status,
    };

    if (editData) {
      updateTask({
        ...data,
        id: editData.id,
      });
    } else {
      addTask(data);
    }

    setTask("");
    setPriority("Low");
    setStatus("To Do");
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>

            <div className="col-md-2">
              <button className="btn btn-primary w-100">
                {editData ? "Update" : "Tambah"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;