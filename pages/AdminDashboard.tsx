
import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  MessageSquare,
  FileText,
  X,
  UserCircle,
  ArrowUpRight
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requests' | 'camps' | 'donors' | 'support'>('requests');
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const stats = [
    { label: 'Total Donors', value: '146', icon: <Users size={16} /> },
    { label: 'Available', value: '146', icon: <CheckCircle2 size={16} />, color: 'text-green-500' },
  ];

  const requests = [
    { id: 'REQ-101', patientName: 'J. Murali', bloodGroup: 'B-', hospital: 'Erode Medical Centre, Erode', status: 'Current' },
    { id: 'REQ-102', patientName: 'Bibidi', bloodGroup: 'A+', hospital: 'KMCH, Chitra, CBE', status: 'Current' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <div className="w-64 bg-[#1A1C23] text-white p-0 flex flex-col border-r border-zinc-800 sticky top-0 h-screen">
        <div className="p-6 border-b border-zinc-800">
          <h1 className="text-xl font-black tracking-tighter uppercase italic">Admin</h1>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Operational Command</p>
        </div>
        <nav className="flex-grow py-4">
          {[
            { id: 'requests', label: 'Blood Requests', icon: <FileText size={18} /> },
            { id: 'camps', label: 'Blood Camps', icon: <Calendar size={18} /> },
            { id: 'donors', label: 'Donors', icon: <Users size={18} /> },
            { id: 'support', label: 'Support', icon: <MessageSquare size={18} /> },
          ].map(nav => (
            <button
              key={nav.id}
              onClick={() => setActiveTab(nav.id as any)}
              className={`w-full flex items-center gap-4 px-8 py-4 text-[11px] font-black uppercase tracking-widest transition-all ${
                activeTab === nav.id ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              {nav.icon}
              {nav.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-grow">
        <header className="bg-white h-20 border-b border-zinc-200 flex items-center justify-between px-10">
           <h2 className="text-2xl font-black tracking-tighter uppercase italic">{activeTab}</h2>
        </header>

        <div className="p-10">
          {activeTab === 'requests' && (
            <div className="space-y-8">
              <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200">
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Patient</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Group</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map(req => (
                      <tr key={req.id} className="border-b border-zinc-100 hover:bg-zinc-50">
                        <td className="px-8 py-6 font-bold text-sm">{req.patientName}</td>
                        <td className="px-8 py-6 font-black text-sm text-red-600">{req.bloodGroup}</td>
                        <td className="px-8 py-6">
                          <div className="flex justify-center gap-2">
                            <button onClick={() => {setSelectedItem(req); setShowEmergencyModal(true)}} className="bg-green-600 text-white px-4 py-1.5 rounded text-[9px] font-black uppercase">Accept</button>
                            <button className="bg-red-600 text-white px-4 py-1.5 rounded text-[9px] font-black uppercase">Reject</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {showEmergencyModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-6">
          <div className="bg-white rounded-lg w-full max-w-lg p-10 shadow-2xl">
            <h3 className="text-2xl font-black mb-6 uppercase italic">Assign Emergency Level</h3>
            <div className="space-y-3 mb-8">
              {['High', 'Medium', 'Low'].map(lvl => (
                <button key={lvl} className="w-full text-left p-4 border rounded-lg font-black text-xs uppercase hover:border-red-600 transition-all">{lvl} Emergency</button>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => setShowEmergencyModal(false)} className="flex-1 py-3 bg-zinc-100 rounded-lg font-black text-[10px] uppercase">Cancel</button>
              <button className="flex-1 py-3 bg-black text-white rounded-lg font-black text-[10px] uppercase">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
