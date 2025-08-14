import { useEffect, useState } from "react";
import Url from "./service";

function TodoList() {
  const [editFlag, setEditFlag] = useState(null);
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const [task, setTask] = useState({ id: "", task: "" });

  function taskHandler(e) {
    const { value, name } = e.target;
    setTask({ ...task, id: todos.length + 1, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setTodos([...todos , task]);

    // fetch(`${Url}/add-task`)

    // setTask({id:'' , task:''})

    try {
      const res = await fetch(`${Url}/add-task`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!res.ok) {
        alert("Failed to add task");
        throw new Error("Failed to add task");
      }

      const newTodo = await res.json();

      setTodos([...todos, newTodo]);

      setTask({ id: "", task: "" });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  async function Delete(id) {
    try {
      const res = await fetch(`${Url}/delete-task/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete task");
      }

      const data = await res.json();
      console.log("Deleted:", data);

      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  useEffect(() => {
    async function todoFetch() {
      try {
        const res = await fetch(`${Url}/todo-list`);
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }

    todoFetch();
  }, []);


  function updateHandler(e){
        const { value, name } = e.target;
    setEditFlag({ ...editFlag, [name]: value });
  }

  async function Edit(e) {
  e.preventDefault();

  try {
    const res = await fetch(`${Url}/update-task`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editFlag)
    });

    const data = await res.json();

    if (res.ok) {
      
      setTodos((prev) =>
        prev.map((todo) => (todo._id === data._id ? data : todo))
      );
      console.log("Update successful:", data);
      alert("User updated successfully!");
      setEditFlag(null);
    } else {
      console.error("Update failed:", data);
      alert(data.message || "Update failed");
    }

  } catch (error) {
    console.error("Error updating user:", error);
    alert("Server error");
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/30">
        <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">
          <i class="fa-solid fa-table-list"></i> Todo List
        </h1>

        <div className="flex justify-center gap-2 mb-4">
          {["all", "completed", "pending"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded-lg shadow ${
                filter === type ? "bg-purple-500 text-white" : "bg-gray-200"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {!editFlag? (<div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Enter a task..."
              onChange={taskHandler}
              name="task"
              value={task.task}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 shadow-sm"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-200"
            >
              Add
            </button>
          </div>):(
            <div className="flex gap-2 mb-6 bg-green-100 p-5 rounded-2xl">
            <input
              type="text"
              placeholder="Enter Edit a task..."
              onChange={updateHandler}
              name="task"
              value={editFlag.task}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 shadow-sm"
            />
            <button
              type="submit"
              onClick={Edit}
              className="bg-green-600 hover:bg-green-800 hover:cursor-pointer text-white px-5 py-2 rounded-lg shadow-md transition-all duration-200"
            >
              Edit
            </button>
            <button onClick={()=> setEditFlag(null)} className="bg-green-600 hover:bg-green-800 hover:cursor-pointer text-white px-5 py-2 rounded-lg shadow-md transition-all duration-200"><i class="fa-solid fa-circle-xmark"></i></button>
          </div>
          )}
        </form>

        {todos.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            No tasks yet. Add one!
          </p>
        ) : (
          <ul className="space-y-3 p-5  max-h-100 overflow-auto rounded-2xl">
            {todos.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-lime-50 rounded-lg p-2 transition-all duration-200"
              >
                <div className="text-gray-700 flex gap-2 place-items-center">
                  <span className="p-2 h-7 w-7 flex items-center justify-center bg-green-300 rounded-full text-white">{index+1}</span> {item.task}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>{setEditFlag(item)}}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-lg shadow-md transition-all duration-200"
                  >
                   <i class="fa-solid fa-pen"></i>
                  </button>
                  <button
                    onClick={() => Delete(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg shadow-md transition-all duration-200"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoList;
