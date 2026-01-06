
import React, { useState } from 'react';
import { 
  FileText, 
  Activity, 
  CheckSquare, 
  Droplet, 
  ChevronRight, 
  ChevronDown,
  Users,
  Heart
} from 'lucide-react';

const MyRequestsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Accepted' | 'Completed' | 'Received' | 'Rejected'>('Accepted');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const stats = [
    { label: 'Total Requests', value: 2, icon: <FileText size={18} />, color: 'border-l-blue-500' },
    { label: 'Pending/Active', value: 1, icon: <Activity size={18} />, color: 'border-l-yellow-500' },
    { label: 'Completed', value: 0, icon: <CheckSquare size={18} />, color: 'border-l-green-500' },
    { label: 'Units Received', value: 0, icon: <Droplet size={18} />, color: 'border-l-red-500' },
  ];

  const tabs: ('Accepted' | 'Completed' | 'Received' | 'Rejected')[] = ['Accepted', 'Completed', 'Received', 'Rejected'];

  const mockRequests = {
    Accepted: [],
    Completed: [],
    Received: [
      {
        id: 'REQ-01',
        title: 'bibdi',
        description: 'For: DHAHAA ADADASD',
        status: 'Pending',
        units: '0/10 Units',
        donors: '0 Donor(s)',
        statusColor: 'bg-[#FFF3CD] text-[#856404]'
      }
    ],
    Rejected: [
      {
        id: 'REQ-02',
        title: 'Testing',
        description: 'For: Testing website for donors',
        status: 'Rejected',
        units: '0/1 Units',
        donors: '0 Donor(s)',
        statusColor: 'bg-red-100 text-red-600'
      }
    ]
  };

  const currentRequests = mockRequests[activeTab] || [];

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-zinc-900 tracking-tighter uppercase italic mb-2">My Requests</h1>
          <p className="text-zinc-500 font-bold text-sm uppercase tracking-widest opacity-60">Track and manage all your blood donation requests.</p>
        </div>

        {/* Stats Grid - Matching Image 42/43/44 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 border-l-4 ${stat.color} flex items-center space-x-6 hover:shadow-md transition-shadow`}>
              <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 text-zinc-400">
                {stat.icon}
              </div>
              <div>
                <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-zinc-800 tracking-tighter">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tab Navigation - Matching Image 42/43/44 */}
        <div className="bg-zinc-100/50 p-1.5 rounded-2xl border border-zinc-200 flex flex-wrap gap-1 mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setExpandedId(null);
              }}
              className={`flex-1 min-w-[120px] px-6 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-red-700 text-white shadow-lg shadow-red-900/20' 
                  : 'text-zinc-400 hover:bg-zinc-200/50 hover:text-zinc-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Request List Section */}
        <div className="space-y-6">
          {currentRequests.length > 0 ? (
            currentRequests.map((req) => (
              <div key={req.id} className="bg-white rounded-[32px] border border-zinc-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                <div 
                  className="p-8 flex items-center justify-between cursor-pointer group"
                  onClick={() => setExpandedId(expandedId === req.id ? null : req.id)}
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-zinc-800 tracking-tight uppercase italic">{req.title}</h3>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{req.description}</p>
                    
                    <div className="flex items-center gap-6 mt-6">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        <Droplet size={14} className="text-red-600" />
                        {req.units}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                        <Users size={14} className="text-blue-600" />
                        {req.donors}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-zinc-100 ${req.statusColor}`}>
                      {req.status}
                    </span>
                    <div className={`text-zinc-300 group-hover:text-red-600 transition-all ${expandedId === req.id ? 'rotate-90' : ''}`}>
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Expandable Donor List - Matching Image 44 */}
                {expandedId === req.id && (
                  <div className="px-10 pb-10 pt-4 border-t border-zinc-50 bg-zinc-50/30 animate-in slide-in-from-top-2 duration-300">
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-4">Donors List</h4>
                      <div className="bg-white border border-zinc-200 rounded-2xl p-12 text-center shadow-sm">
                        <p className="text-[11px] font-bold text-zinc-400 italic">No donors have responded yet.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="py-32 text-center animate-in fade-in duration-500">
              <div className="bg-white border border-zinc-100 rounded-[48px] p-24 shadow-sm inline-block">
                <FileText className="mx-auto text-zinc-100 mb-8" size={64} />
                <p className="text-[11px] font-black text-zinc-300 uppercase tracking-[0.4em] italic">
                  No requests found in the '{activeTab.toLowerCase()}' category.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRequestsPage;
