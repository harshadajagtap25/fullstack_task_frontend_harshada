import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { fetchTasks } from "./services/api";
import noteApp from "./assets/notes-app.svg";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const fetchedTasks = await fetchTasks();

      setTasks(fetchedTasks);
      setError(null);
    } catch (err) {
      setError("Failed to load tasks. Please refresh the page to try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="px-4 py-8 w-full lg:px-6 lg:w-[759px] lg:min-h-[452px] lg:max-h-[550px] lg:rounded-xl lg:my-auto lg:shadow-md lg:border lg:border-[#f0f0f2]">
      <header className="flex items-center mb-8 text-start">
        <span>
          <img src={noteApp} alt="noteApp" />
        </span>
        <h1 className="  text-3xl lg:text-5xl font-bold text-gray-800">
          Note App
        </h1>
      </header>

      <main className="space-y-4">
        <AddTaskForm onTaskAdded={loadTasks} />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
          </div>
        )}
        <TaskList tasks={tasks} loading={loading} />
      </main>
    </div>
  );
}

export default App;
