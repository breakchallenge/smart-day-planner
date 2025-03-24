import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import LoadingIndicator from './LoadingIndicator';
import PlanResults from './PlanResults';
import { simulateLLMResponse } from './plannerUtils';

const TaskPlanner = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [plan, setPlan] = useState(null);
  const [error, setError] = useState('');

  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const generatePlan = () => {
    if (tasks.length < 2) {
      setError('Please add at least 2 tasks to plan your day.');
      return;
    }

    setError('');
    setIsLoading(true);
    setPlan(null);

    // Simulate API call to LLM
    setTimeout(() => {
      const generatedPlan = simulateLLMResponse(tasks);
      setPlan(generatedPlan);
      setIsLoading(false);
    }, 2000);
  };

  const resetPlanner = () => {
    setPlan(null);
    setTasks([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Smart Day Planner</h1>
        
        {!plan && !isLoading && (
          <>
            <TaskInput 
              addTask={addTask} 
              error={error}
            />
            
            <TaskList 
              tasks={tasks} 
              removeTask={removeTask} 
            />
            
            <button
              onClick={generatePlan}
              disabled={isLoading || tasks.length < 2}
              className={`w-full py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                isLoading || tasks.length < 2
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              <span>Plan My Day</span>
            </button>
          </>
        )}

        {isLoading && <LoadingIndicator />}

        {plan && <PlanResults plan={plan} resetPlanner={resetPlanner} />}
      </div>
    </div>
  );
};

export default TaskPlanner;