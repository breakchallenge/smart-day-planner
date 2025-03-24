import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingIndicator = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div className="bg-blue-600 h-2.5 rounded-full animate-[progress_2s_ease-in-out]" style={{width: '100%'}}></div>
      </div>
      <div className="flex items-center space-x-2">
        <Loader2 size={20} className="animate-spin text-blue-500" />
        <p className="text-gray-500">Our AI is optimizing your day for maximum productivity...</p>
      </div>
    </div>
  );
};

export default LoadingIndicator;