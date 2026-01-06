
import React, { useState } from 'react';

const AdminCamps: React.FC = () => {
  const [campFilter, setCampFilter] = useState<'All' | 'Upcoming' | 'Ongoing' | 'Completed'>('All');

  const mockCamps = [
    { 
      id: 'CAMP-01', 
      name: 'Annual City Blood Drive', 
      dateRange: '12 Dec 2025 - 14 Dec 2025', 
      location: 'City Town Hall, Coimbatore', 
      status: 'Upcoming',
      organizer: 'Rotary Club'
    },
    { 
      id: 'CAMP-02', 
      name: 'Corporate Hero Drive', 
      dateRange: '10 Dec 2025 - 11 Dec 2025', 
      location: 'Tech Park SEZ, Chennai', 
      status: 'Ongoing',
      organizer: 'IT Solutions Ltd'
    }
  ];

  const filteredCamps = mockCamps.filter(camp => 
    campFilter === 'All' ? true : camp.status === campFilter
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex gap-2">
        {['All Camps', 'Upcoming', 'Ongoing', 'Completed'].map(filter => (
          <button 
            key={filter} 
            onClick={() => setCampFilter(filter === 'All Camps' ? 'All' : filter as any)}
            className={`px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${
              (campFilter === 'All' && filter === 'All Camps') || campFilter === filter 
                ? 'bg-red-800 text-white shadow-lg' 
                : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Camp Name</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Date Range</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Location</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Status</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCamps.map(camp => (
              <tr key={camp.id} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                <td className="px-8 py-6">
                   <p className="font-bold text-sm text-zinc-800">{camp.name}</p>
                   <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{camp.organizer}</p>
                </td>
                <td className="px-8 py-6 text-zinc-500 text-[11px] font-bold uppercase tracking-wide">{camp.dateRange}</td>
                <td className="px-8 py-6 text-zinc-500 text-[11px] font-bold uppercase truncate max-w-[200px]">{camp.location}</td>
                <td className="px-8 py-6 text-center">
                  <span className={`px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest ${
                    camp.status === 'Ongoing' ? 'bg-green-100 text-green-700' :
                    camp.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-zinc-100 text-zinc-500'
                  }`}>
                    {camp.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-center">
                  <button className="bg-[#007BFF] text-white px-4 py-1.5 rounded text-[9px] font-black uppercase">More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCamps;
