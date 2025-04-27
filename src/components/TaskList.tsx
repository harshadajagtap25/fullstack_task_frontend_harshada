import React from "react";
import { Task } from "./Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, loading }) => {
  if (loading) {
    return (
      <div className="task-container p-4">
        <p className="text-center text-gray-600">Loading tasks...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="task-container p-4">
        <p className="text-center text-gray-600">
          No tasks found. Add your first task!
        </p>
      </div>
    );
  }

  return (
    <div className="task-container">
      <h2 className="text-xl font-semibold border-b border-[#C5CAD3]">Notes</h2>
      <div className="max-h-60 overflow-y-auto custom-scrollbar">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
