import React from "react";
import { Task } from "./Task";

interface TaskItemProps {
  task: Task;
}
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="py-2 border-b border-[#C5CAD3]">
      <div className="flex-1">
        <p className="text-base">{task.content}</p>
      </div>
    </div>
  );
};

export default TaskItem;
