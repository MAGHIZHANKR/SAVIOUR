
import React from 'react';

interface StepProgressProps {
  steps: string[];
  currentStep: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ steps, currentStep }) => {
  return (
    <div className="mb-12 relative">
      <div className="flex justify-between items-center max-w-2xl mx-auto">
        {steps.map((step, idx) => {
          const isActive = idx + 1 <= currentStep;
          const isCurrent = idx + 1 === currentStep;
          
          return (
            <div key={idx} className="flex flex-col items-center relative z-10">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all border-4 ${
                  isActive 
                    ? 'bg-red-600 text-white border-red-600' 
                    : 'bg-white text-gray-300 border-gray-200'
                } ${isCurrent ? 'ring-4 ring-red-100 scale-110' : ''}`}
              >
                {idx + 1}
              </div>
              <span 
                className={`mt-3 text-xs md:text-sm font-semibold text-center absolute -bottom-8 whitespace-nowrap ${
                  isActive ? 'text-red-700' : 'text-gray-400'
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Connector lines */}
      <div className="absolute top-6 left-[10%] right-[10%] h-1 bg-gray-200 -z-0 transform -translate-y-1/2">
        <div 
          className="h-full bg-red-600 transition-all duration-500 ease-in-out" 
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default StepProgress;
