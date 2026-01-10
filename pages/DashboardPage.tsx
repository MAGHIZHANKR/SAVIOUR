
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
    { label: 'Active Requests', value: '10', icon: <AlertCircle size={24} />, color: 'border-blue-600' },
    { label: 'Eligible for me', value: '04', icon: <Clock size={24} />, color: 'border-amber-600' },
    { label: 'Donations', value: '00', icon: <CheckCircle size={24} />, color: 'border-emerald-600' },
    { label: 'Units (Global)', value: '26', icon: <Droplet size={24} />, color: 'border-red-600' },
  ];

  const mockRequests = [
    { 
      id: 'REQ-01', 
      patient: 'Senthil Kumar P', 
      hospital: 'KMCH Main Node', 
      city: 'Coimbatore', 
      group: 'B+', 
      emergency: 'High Emergency',
      attender: 'Vinith',
      contact: '8015633350',
      units: 3,
      unitsPending: 3
    },
    { id: 'REQ-02', patient: 'Krishnaveni V', hospital: 'G.K.N.M Hospital', city: 'Coimbatore', group: 'A+', emergency: 'High Emergency' },
    { id: 'REQ-03', patient: 'Lakshmi', hospital: 'KMCH Hospital', city: 'Coimbatore', group: 'O-', emergency: 'High Emergency' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Heavy Dashboard Header */}
      <div className="bg-red-800 text-white px-8 py-16 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
             <div className="bg-white p-3 rounded-2xl shadow-lg">
               <Heart className="text-red-800 fill-red-800" size={32} />
             </div>
             <div>
               <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none text-impact">SAVIOUR</h1>
               <p className="text-[12px] font-black uppercase tracking-[0.4em] opacity-80 mt-1">User Command Dashboard</p>
             </div>
          </div>
          <div className="flex items-center gap-8 text-[12px] font-black uppercase tracking-[0.2em]">
            <span className="hover:text-red-200 cursor-pointer transition-colors">Emergency Protocol</span>
            <span className="bg-white text-red-800 px-8 py-3 rounded-xl shadow-2xl active:scale-95">Secure Session</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Visible Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className={`bg-white rounded-3xl p-10 border-l-8 shadow-sm ${stat.color} hover:shadow-2xl transition-all hover:-translate-y-1`}>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[12px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                <div className="text-slate-200">{stat.icon}</div>
              </div>
              <div className="text-6xl font-black tracking-tighter text-slate-900 italic text-impact">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Action Content */}
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
          <div className="flex border-b border-slate-100 bg-slate-50/50">
            {['Active Requests', 'Eligible for me', 'Completed'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0] as any)}
                className={`flex-1 md:flex-none px-12 py-7 text-[12px] font-black uppercase tracking-widest transition-all relative ${
                  activeTab === tab.toLowerCase().split(' ')[0] 
                    ? 'text-red-700 bg-white border-r border-l border-slate-100' 
                    : 'text-slate-400 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase().split(' ')[0] && (
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-red-700"></div>
                )}
              </button>
            ))}
          </div>

          <div className="p-10">
            <div className="space-y-10">
              {mockRequests.map(req => (
                <div key={req.id} className="bg-white border-2 border-slate-50 rounded-[32px] overflow-hidden hover:border-red-600/20 transition-all shadow-sm">
                  <div className="p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900 text-impact">{req.patient}</h4>
                        <span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-red-100">{req.emergency}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-y-3 gap-x-10 text-slate-500 text-[13px] font-bold uppercase tracking-wider healthy-text">
                        <span className="flex items-center gap-3"><MapPin size={18} className="text-red-600" /> {req.hospital} • {req.city}</span>
                        <span className="flex items-center gap-3"><Droplet size={18} className="text-red-600" /> Blood Group: <span className="text-red-700 font-black">{req.group}</span></span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                       <button className="text-slate-300 hover:text-red-600 transition-colors"><Heart size={28} /></button>
                       <button 
                         onClick={() => setShowVerifyFlow(showVerifyFlow === req.id ? null : req.id)}
                         className={`px-14 py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 ${
                            showVerifyFlow === req.id ? 'bg-slate-900 text-white' : 'bg-red-700 text-white hover:bg-red-800'
                         }`}
                       >
                         {showVerifyFlow === req.id ? 'Cancel Mission' : 'Accept Mission'}
                       </button>
                    </div>
                  </div>

                  {showVerifyFlow === req.id && (
                    <div className="bg-slate-50 p-12 border-t-2 border-slate-100 animate-in slide-in-from-top-4 duration-300">
                      <div className="flex items-start gap-6 mb-12 bg-amber-50 p-6 rounded-3xl border border-amber-200">
                        <AlertCircle size={28} className="text-amber-600 mt-1" />
                        <div>
                           <p className="text-[14px] font-black uppercase tracking-widest text-amber-900 mb-2">Operational Step: Final Verification</p>
                           <p className="text-[13px] text-amber-800 font-bold healthy-text">Enter the 6-digit sync key provided by the hospital attender to verify your arrival and finalize the donation record.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-10">
                           <div className="flex justify-center gap-4">
                              {[1,2,3,4,5,6].map(i => (
                                <input key={i} type="text" maxLength={1} className="w-14 h-20 bg-white border-4 border-slate-200 rounded-2xl text-center text-3xl font-black focus:border-red-600 outline-none transition-all shadow-inner" />
                              ))}
                           </div>
                           <div className="flex gap-6">
                              <button className="flex-grow bg-slate-950 text-white py-6 rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-black shadow-2xl active:scale-95 transition-all">Synchronize & Verify</button>
                              <button onClick={() => setShowVerifyFlow(null)} className="px-10 py-6 border-4 border-slate-200 rounded-2xl font-black text-[12px] uppercase tracking-widest text-slate-400 hover:bg-slate-200 transition-all">Abort</button>
                           </div>
                        </div>

                        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-2 gap-10">
                           <div>
                              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Attender</p>
                              <p className="text-lg font-black text-slate-900 italic">{req.attender}</p>
                           </div>
                           <div>
                              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Contact</p>
                              <p className="text-lg font-black text-slate-900">{req.contact}</p>
                           </div>
                           <div className="col-span-2 pt-6 border-t border-slate-100">
                              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Requirement Status</p>
                              <p className="text-3xl font-black text-red-700 italic text-impact">{req.unitsPending} / {req.units} Units Pending</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-24 text-center">
              <p className="text-[12px] font-black text-slate-300 uppercase tracking-[0.6em] italic">Intelligence feed updated in real-time. Stand by for inbound requests.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
