import React from 'react';
import { Trash2 } from 'lucide-react';

const TaskList = ({ tasks, removeTask }) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2 mt-4 mb-6">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <span className="text-gray-700">{task}</span>
          <button
            onClick={() => removeTask(index)}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;