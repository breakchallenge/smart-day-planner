import React from 'react';

const PlanResults = ({ plan, resetPlanner }) => {
  return (
    <div className="animate-fadeIn">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700 italic">{plan.explanation}</p>
      </div>
      
      <div className="space-y-4">
        {plan.schedule.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 text-blue-800 font-bold rounded-lg p-2 text-center min-w-[80px]">
                {item.time}
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">{item.task}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.reason}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={resetPlanner}
        className="w-full mt-6 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
      >
        Plan Another Day
      </button>
    </div>
  );
};

export default PlanResults;