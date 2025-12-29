
import React, { useState } from 'react';
import { FileText, Activity, CheckSquare, Droplet } from 'lucide-react';

const MyRequestsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Accepted');
  
  const stats = [
    { label: 'Total Requests', value: 0, icon: <FileText size={20} className="text-blue-500" />, color: 'border-blue-500' },
    { label: 'Pending/Active', value: 0, icon: <Activity size={20} className="text-yellow-500" />, color: 'border-yellow-500' },
    { label: 'Completed', value: 0, icon: <CheckSquare size={20} className="text-green-500" />, color: 'border-green-500' },
    { label: 'Units Received', value: 0, icon: <Droplet size={20} className="text-red-500" />, color: 'border-red-500' },
  ];

  const tabs = ['Accepted', 'Completed', 'Received', 'Rejected'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">My Requests</h1>
      <p className="text-gray-500 mb-10">Track and manage all your blood donation requests.</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className={`bg-white rounded-2xl p-6 shadow-md border-l-4 flex items-center space-x-4 ${stat.color}`}>
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
              {stat.icon}
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{stat.label}</div>
              <div className="text-3xl font-black text-gray-800">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="flex flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-4 text-sm font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-500 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      <div className="py-24 text-center">
        <p className="text-gray-400 italic">No requests found in the '{activeTab.toLowerCase()}' category.</p>
      </div>
    </div>
  );
};

export default MyRequestsPage;
