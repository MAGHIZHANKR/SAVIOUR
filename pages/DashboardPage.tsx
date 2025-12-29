
import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  CheckCircle, 
  Droplet, 
  AlertCircle,
  Clock,
  MapPin,
  ChevronDown
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'eligible' | 'completed'>('active');
  const [showVerifyFlow, setShowVerifyFlow] = useState<string | null>(null);

  const stats = [
    { label: 'Active Requests', value: '10', icon: <AlertCircle size={20} />, color: 'border-blue-500' },
    { label: 'Eligible for me', value: '4', icon: <Clock size={20} />, color: 'border-yellow-600' },
    { label: 'My Completed Donations', value: '0', icon: <CheckCircle size={20} />, color: 'border-green-500' },
    { label: 'Units Needed (Eligible)', value: '26', icon: <Droplet size={20} />, color: 'border-red-600' },
  ];

  const mockRequests = [
    { 
      id: 'REQ-01', 
      patient: 'Senthil Kumar P', 
      hospital: 'KMCH', 
      city: 'Coimbatore', 
      group: 'B+', 
      emergency: 'High Emergency',
      attender: 'Vinith',
      contact: '8015633350',
      units: 3,
      unitsPending: 3
    },
    { id: 'REQ-02', patient: 'Krishnaveni V', hospital: 'G.Kuppuswamy Naidu Memorial Hospital', city: 'Coimbatore', group: 'A+', emergency: 'High Emergency' },
    { id: 'REQ-03', patient: 'Lakshmi', hospital: 'KMCH', city: 'Coimbatore', group: 'O-', emergency: 'High Emergency' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* User Dashboard Header - Similar to Red Top Bar */}
      <div className="bg-red-700 text-white px-8 py-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="bg-white p-2 rounded-lg">
               <Heart className="text-red-700 fill-red-700" size={24} />
             </div>
             <div>
               <h1 className="text-2xl font-black italic tracking-tighter uppercase leading-none">SAVIOUR</h1>
               <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">User Command Dashboard</p>
             </div>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest">
            <span className="hover:text-red-200 cursor-pointer">Support</span>
            <span className="bg-white text-red-700 px-4 py-2 rounded-full shadow-lg">Active Session</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-white rounded-xl p-8 border-l-4 shadow-sm ${stat.color} hover:shadow-md transition-shadow`}>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{stat.label}</span>
                <div className="text-zinc-300">{stat.icon}</div>
              </div>
              <div className="text-4xl font-black tracking-tighter">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* List Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100">
          <div className="flex border-b border-zinc-100 bg-zinc-50/50">
            {['Active Requests', 'Eligible for me', 'Completed'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0] as any)}
                className={`px-10 py-5 text-[11px] font-black uppercase tracking-widest transition-all relative ${
                  activeTab === tab.toLowerCase().split(' ')[0] 
                    ? 'text-red-600 bg-white' 
                    : 'text-zinc-400 hover:text-zinc-600'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase().split(' ')[0] && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                )}
              </button>
            ))}
          </div>

          <div className="p-8">
            <div className="space-y-6">
              {mockRequests.map(req => (
                <div key={req.id} className="border border-zinc-100 rounded-2xl overflow-hidden">
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-black italic uppercase tracking-tight">{req.patient}</h4>
                        <span className="bg-red-50 text-red-600 px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest">{req.emergency}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-2"><MapPin size={14} className="text-red-600" /> {req.hospital} • {req.city}</span>
                        <span className="flex items-center gap-2"><Droplet size={14} className="text-red-600" /> Blood Group: {req.group}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                       <button className="text-zinc-300 hover:text-red-600"><Heart size={20} /></button>
                       <button className="text-zinc-300 hover:text-black"><ChevronDown size={20} /></button>
                       <button 
                         onClick={() => setShowVerifyFlow(showVerifyFlow === req.id ? null : req.id)}
                         className={`px-10 py-3 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${
                            showVerifyFlow === req.id ? 'bg-zinc-800 text-white' : 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
                         }`}
                       >
                         {showVerifyFlow === req.id ? 'Cancel' : 'Donate Now'}
                       </button>
                    </div>
                  </div>

                  {/* Verification Flow - Matches Image 3/4/5 */}
                  {showVerifyFlow === req.id && (
                    <div className="bg-zinc-50 p-8 border-t border-zinc-100 animate-in slide-in-from-top-4 duration-300">
                      <div className="flex items-start gap-4 mb-8 bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                        <AlertCircle size={20} className="text-yellow-600 mt-1" />
                        <div>
                           <p className="text-xs font-black uppercase tracking-widest text-yellow-800 mb-1">Action Required: Verify Donation</p>
                           <p className="text-[11px] text-yellow-700 font-medium">To complete the donation, please enter the 6-digit OTP provided by the requester at the hospital venue.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                           <div className="flex justify-center gap-3">
                              {[1,2,3,4,5,6].map(i => (
                                <input key={i} type="text" maxLength={1} className="w-12 h-16 bg-white border-2 border-zinc-200 rounded-xl text-center text-xl font-black focus:border-red-600 outline-none transition-all" />
                              ))}
                           </div>
                           <div className="flex gap-4">
                              <button className="flex-grow bg-black text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-zinc-800">Verify OTP</button>
                              <button onClick={() => setShowVerifyFlow(null)} className="px-8 py-4 border-2 border-zinc-200 rounded-xl font-black text-[10px] uppercase tracking-widest text-zinc-400 hover:bg-zinc-100">Cancel</button>
                           </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm grid grid-cols-2 gap-8">
                           <div>
                              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Attender Name</p>
                              <p className="text-sm font-bold">{req.attender || 'Senthil'}</p>
                           </div>
                           <div>
                              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Contact</p>
                              <p className="text-sm font-bold">{req.contact || '8015633350'}</p>
                           </div>
                           <div>
                              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Units Needed</p>
                              <p className="text-sm font-bold text-red-600">{req.units || 3}</p>
                           </div>
                           <div>
                              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Units Pending</p>
                              <p className="text-sm font-bold text-zinc-400">{req.unitsPending || 3}</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-[11px] font-black text-zinc-300 uppercase tracking-[0.4em]">This list is dynamically updated based on your blood group compatibility.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
