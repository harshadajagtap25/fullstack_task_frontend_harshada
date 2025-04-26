import React, { useState } from "react";
import { addTask } from "../services/api";
import addCircle from "../assets/plus-circle.svg";

const AddTaskForm = ({ onTaskAdded }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      setError("Task content cannot be empty");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await addTask(content);
      setContent("");

      setTimeout(() => {
        onTaskAdded();
      }, 500);
    } catch (err) {
      setError("Failed to add task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2 flex gap-2">
        <input
          className="p-3 border border-[#D3D4D9] rounded-xl w-3/4 lg:w-[500px]"
          id="task"
          type="text"
          placeholder="New Note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
        />
        <div className="flex items-center justify-between flex-1">
          <button
            className="flex items-center justify-center gap-2 p-3 border bg-[#92400E] rounded-xl text-white font-bold w-full"
            type="submit"
            disabled={loading}
          >
            <img src={addCircle} alt="addCircle" className="h-5 w-5" />
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm italic mb-4">{error}</p>}
    </form>
  );
};

export default AddTaskForm;
