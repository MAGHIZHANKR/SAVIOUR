
import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  MessageSquare,
  FileText,
  X
} from 'lucide-react';
import SuperAdminRequests from '../superadmin/SuperAdminRequests';
import SuperAdminCamps from '../superadmin/SuperAdminCamps';
import AdminDonors from '../admin/AdminDonors';
import AdminSupport from '../admin/AdminSupport';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'requests' | 'camps' | 'donors' | 'support'>('requests');
  
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <div className="w-64 bg-[#1A1C23] text-white p-0 flex flex-col border-r border-zinc-800 sticky top-0 h-screen z-50">
        <div className="p-6 border-b border-zinc-800">
          <h1 className="text-xl font-black tracking-tighter uppercase italic leading-none">Admin</h1>
          <h2 className="text-xl font-black tracking-tighter uppercase italic mb-1">Dashboard</h2>
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Manage your operations</p>
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
                activeTab === nav.id 
                  ? 'bg-red-700 text-white border-l-4 border-white shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              {nav.icon}
              {nav.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-grow">
        <header className="bg-white h-20 border-b border-zinc-200 flex items-center justify-between px-10 sticky top-0 z-40">
           <h2 className="text-2xl font-black tracking-tighter uppercase italic">
             {activeTab === 'requests' ? 'Blood Requests' : activeTab === 'camps' ? 'Camps' : activeTab === 'support' ? 'Support Inbox' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
           </h2>
           <button className="bg-zinc-100 text-zinc-600 px-6 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-all border border-zinc-200">
             Export
           </button>
        </header>

        <div className="p-10">
          {/* Using SuperAdmin versions for Requests and Camps as requested for better detail view/functionality */}
          {activeTab === 'requests' && <SuperAdminRequests />}
          {activeTab === 'camps' && <SuperAdminCamps />}
          {activeTab === 'donors' && <AdminDonors />}
          {activeTab === 'support' && <AdminSupport />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
