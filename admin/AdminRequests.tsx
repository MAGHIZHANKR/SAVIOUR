
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface AdminRequestsProps {
  onAction: (type: 'emergency' | 'detail' | 'donor', item: any) => void;
}

const AdminRequests: React.FC<AdminRequestsProps> = ({ onAction }) => {
  const [requestFilter, setRequestFilter] = useState<'Current' | 'Ongoing' | 'Completed' | 'Rejected' | 'All'>('Current');

  const mockRequests = [
    { 
      id: 'REQ-101', patientName: 'J Murali', bloodGroup: 'B-', hospital: 'Erode Medical Centre, Erode', 
      status: 'Current', attenderName: 'Kamal', attenderMobile: '9523842352', city: 'Erode',
      country: 'India', gender: 'male', patientAge: '40', reason: 'Emergency Surgery', unitsNeeded: '2',
      verified: 'received', emergencyLevel: null
    },
    { 
      id: 'REQ-102', patientName: 'bibdi', bloodGroup: '', hospital: 'DFDFD', 
      status: 'Current', attenderName: 'DFDFDG', attenderMobile: '9876543210', city: 'Dharmapuri',
      country: 'India', gender: 'female', patientAge: '18', reason: 'DHAHAA ADADASD', unitsNeeded: '10',
      verified: 'received', emergencyLevel: null
    }
  ];

  const filteredRequests = mockRequests.filter(req => 
    requestFilter === 'All' ? true : req.status === requestFilter
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex gap-2">
        {['Current', 'Ongoing', 'Completed', 'Rejected', 'All'].map(filter => (
          <button 
            key={filter} 
            onClick={() => setRequestFilter(filter as any)}
            className={`px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${
              requestFilter === filter ? 'bg-red-800 text-white shadow-lg' : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-300'
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
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Patient Name</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Blood Group</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Hospital</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map(req => (
              <tr key={req.id} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                <td className="px-8 py-6 font-bold text-sm text-zinc-700">{req.patientName}</td>
                <td className="px-8 py-6 font-black text-sm text-red-600">{req.bloodGroup || '-'}</td>
                <td className="px-8 py-6 text-zinc-500 text-[11px] font-bold uppercase">{req.hospital}</td>
                <td className="px-8 py-6">
                  <div className="flex items-center justify-center gap-1">
                     <button onClick={() => onAction('emergency', req)} className="bg-[#28A745] text-white px-4 py-1.5 rounded text-[9px] font-black uppercase">Accept</button>
                     <button className="bg-[#DC3545] text-white px-4 py-1.5 rounded text-[9px] font-black uppercase">Reject</button>
                     <button onClick={() => onAction('detail', req)} className="bg-[#007BFF] text-white px-4 py-1.5 rounded text-[9px] font-black uppercase">More</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRequests;
