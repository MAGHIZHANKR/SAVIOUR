
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Activity, 
  Users, 
  Droplet, 
  Target, 
  ShieldCheck, 
  ChevronRight, 
  Globe, 
  Zap, 
  Clock, 
  Wifi, 
  AlertTriangle,
  Navigation
} from 'lucide-react';
import { BloodGroup } from '../types';

const BLOOD_ORDER = [
  BloodGroup.APositive, BloodGroup.OPositive, BloodGroup.BPositive, BloodGroup.ABPositive,
  BloodGroup.ANegative, BloodGroup.ONegative, BloodGroup.BNegative, BloodGroup.ABNegative
];

const COMPATIBILITY_DATA: Record<string, { receive: BloodGroup[], donate: BloodGroup[] }> = {
  [BloodGroup.APositive]: {
    receive: [BloodGroup.APositive, BloodGroup.ANegative, BloodGroup.OPositive, BloodGroup.ONegative],
    donate: [BloodGroup.APositive, BloodGroup.ABPositive]
  },
  [BloodGroup.OPositive]: {
    receive: [BloodGroup.OPositive, BloodGroup.ONegative],
    donate: [BloodGroup.OPositive, BloodGroup.APositive, BloodGroup.BPositive, BloodGroup.ABPositive]
  },
  [BloodGroup.BPositive]: {
    receive: [BloodGroup.BPositive, BloodGroup.BNegative, BloodGroup.OPositive, BloodGroup.ONegative],
    donate: [BloodGroup.BPositive, BloodGroup.ABPositive]
  },
  [BloodGroup.ABPositive]: {
    receive: Object.values(BloodGroup),
    donate: [BloodGroup.ABPositive]
  },
  [BloodGroup.ANegative]: {
    receive: [BloodGroup.ANegative, BloodGroup.ONegative],
    donate: [BloodGroup.APositive, BloodGroup.ANegative, BloodGroup.ABPositive, BloodGroup.ABNegative]
  },
  [BloodGroup.ONegative]: {
    receive: [BloodGroup.ONegative],
    donate: Object.values(BloodGroup)
  },
  [BloodGroup.BNegative]: {
    receive: [BloodGroup.BNegative, BloodGroup.ONegative],
    donate: [BloodGroup.BPositive, BloodGroup.BNegative, BloodGroup.ABPositive, BloodGroup.ABNegative]
  },
  [BloodGroup.ABNegative]: {
    receive: [BloodGroup.ABNegative, BloodGroup.ANegative, BloodGroup.BNegative, BloodGroup.ONegative],
    donate: [BloodGroup.ABPositive, BloodGroup.ABNegative]
  }
};

const HomePage: React.FC = () => {
  const [selectedBlood, setSelectedBlood] = useState<BloodGroup>(BloodGroup.OPositive);
  const [impactCount, setImpactCount] = useState(12480);

  useEffect(() => {
    const interval = setInterval(() => {
      setImpactCount(prev => prev + Math.floor(Math.random() * 2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-white text-slate-950 font-sans overflow-x-hidden">
      {/* 1. HERO: TACTICAL COMMAND */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center bg-white">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden blood-grid"></div>
        <div className="scanline"></div>

        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center">
          <div className="inline-flex items-center space-x-4 bg-slate-950 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-2xl">
            <Wifi size={14} className="text-red-600 animate-pulse" />
            <span>Link Node Established // {new Date().toLocaleDateString()}</span>
          </div>

          <h1 className="text-[12vw] md:text-[140px] lg:text-[180px] font-black leading-none tracking-tighter uppercase italic text-impact mb-6 text-slate-950 select-none">
            SAVIOUR
          </h1>

          <h2 className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-500 mb-16">
            The Bio-Link <span className="text-red-600">Standard.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
            <Link 
              to="/become-donor" 
              className="group bg-red-600 text-white p-10 rounded-[40px] flex flex-col items-start text-left transition-all hover:bg-slate-950 hover:-translate-y-2 shadow-2xl shadow-red-600/20"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-red-600 transition-colors">
                <Zap size={28} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-70">Extraction Protocol</span>
              <span className="text-3xl font-black italic uppercase tracking-tight text-impact">Register as Hero</span>
            </Link>

            <Link 
              to="/require-donor" 
              className="group bg-slate-100 border border-slate-200 text-slate-950 p-10 rounded-[40px] flex flex-col items-start text-left transition-all hover:border-red-600 hover:-translate-y-2 shadow-xl"
            >
              <div className="w-14 h-14 bg-slate-200 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-slate-950 group-hover:text-white transition-all">
                <Target size={28} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-50">Supply Request</span>
              <span className="text-3xl font-black italic uppercase tracking-tight text-impact">Initialize Sync</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EMERGENCY INTERFACE: HIGH-FIDELITY SHORTCUTS */}
      <section className="bg-slate-950 py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="max-w-xl">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white animate-heartbeat">
                   <AlertTriangle size={24} />
                </div>
                <span className="text-red-500 font-black text-[14px] uppercase tracking-[0.8em]">Priority 01</span>
             </div>
             <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none text-impact mb-10">
               Emergency<br />Deployment.
             </h3>
             <p className="text-slate-400 font-bold italic text-xl leading-relaxed mb-12">
               Instant tactical access to regional blood assets and trauma centers. Zero latency response for critical life-support sync.
             </p>
             <div className="flex flex-wrap gap-6">
                <Link to="/emergency" className="bg-white text-slate-950 px-10 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all text-impact flex items-center gap-4 group">
                  Emergency Hub <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/blood-banks" className="border-2 border-white/10 text-white px-10 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] hover:border-red-600 transition-all text-impact">
                  Asset Directory
                </Link>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
             {[
               { icon: <Clock />, value: "108", label: "Ambulance" },
               { icon: <ShieldCheck />, value: "100", label: "Sector Police" },
               { icon: <Droplet />, value: "1910", label: "Blood Line" },
               { icon: <Navigation />, value: "24/7", label: "Deployment" },
             ].map((stat, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/10 transition-all group">
                  <div className="text-red-500 mb-8 group-hover:scale-110 transition-transform">
                     {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-white italic tracking-tighter text-impact mb-2">{stat.value}</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. SYNC GRID: INNOVATIVE COMPATIBILITY TOOL */}
      <section className="py-48 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-red-600 font-black text-[16px] uppercase tracking-[1.5em] mb-8 block">Logistics Interface</span>
            <h3 className="text-6xl md:text-[100px] font-black text-slate-950 tracking-tighter uppercase italic text-impact leading-none">The Grid.</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="grid grid-cols-4 gap-4">
              {BLOOD_ORDER.map((bg) => (
                <button
                  key={bg}
                  onClick={() => setSelectedBlood(bg)}
                  className={`py-12 rounded-[32px] font-black text-3xl transition-all border-4 ${
                    selectedBlood === bg 
                      ? 'bg-red-600 border-red-600 text-white shadow-3xl scale-110 z-10' 
                      : 'bg-slate-50 border-slate-100 text-slate-300 hover:border-red-600/40'
                  }`}
                >
                  {bg}
                </button>
              ))}
            </div>

            <div className="bg-slate-950 rounded-[60px] p-20 relative overflow-hidden shadow-3xl">
               <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_#dc2626_2.5px,_transparent_2.5px)] bg-[size:40px_40px]"></div>
               <div className="relative z-10 text-center">
                  <div className="animate-heartbeat mb-16">
                     <Droplet size={140} className="text-red-600 fill-red-600 mx-auto drop-shadow-[0_0_40px_rgba(220,38,38,0.5)]" />
                  </div>
                  <h4 className="text-8xl font-black text-white italic text-impact tracking-tighter mb-4">{selectedBlood}</h4>
                  <p className="text-red-600 font-black text-[12px] uppercase tracking-[1em] mb-16">Verified Status</p>
                  
                  <div className="grid grid-cols-2 gap-10">
                    <div className="text-left">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4 italic">Inbound Feed</span>
                       <div className="flex flex-wrap gap-2">
                         {COMPATIBILITY_DATA[selectedBlood]?.receive.map(bg => (
                           <span key={bg} className="px-5 py-2 bg-white/10 rounded-xl text-xs font-black text-white border border-white/5">{bg}</span>
                         ))}
                       </div>
                    </div>
                    <div className="text-left">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4 italic">Outbound Target</span>
                       <div className="flex flex-wrap gap-2">
                         {COMPATIBILITY_DATA[selectedBlood]?.donate.map(bg => (
                           <span key={bg} className="px-5 py-2 bg-white/10 rounded-xl text-xs font-black text-white border border-white/5">{bg}</span>
                         ))}
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL-TIME IMPACT: SIMPLE & POWERFUL */}
      <section className="py-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
          <div className="col-span-1 md:col-span-2">
            <span className="text-red-600 font-black text-[14px] uppercase tracking-[1.2em] mb-10 block">Global Sync Integrity</span>
            <div className="text-[120px] md:text-[220px] font-black italic tracking-tighter text-impact leading-none mb-10 select-none text-slate-950">
              {impactCount.toLocaleString()}
            </div>
            <p className="text-3xl font-bold text-slate-400 italic max-w-2xl border-l-8 border-red-600 pl-12">
              Verified clinical nodes successfully synchronized across the regional sector network.
            </p>
          </div>
          <div className="bg-white p-20 rounded-[80px] border border-slate-200 shadow-3xl flex flex-col items-center text-center">
             <Globe size={80} className="text-red-600 mb-12 animate-pulse" />
             <h5 className="text-4xl font-black text-slate-950 italic uppercase tracking-tighter text-impact mb-6">Sector v4.0</h5>
             <p className="text-slate-400 font-bold uppercase text-[12px] tracking-widest italic mb-12">Decentralized Asset Recovery</p>
             <Link to="/about" className="w-full bg-slate-950 text-white py-8 rounded-3xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-red-600 transition-all">
               View Protocol
             </Link>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION: FINAL SOVEREIGN SEAL */}
      <section className="py-72 px-6 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/[0.02] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
           <h3 className="text-5xl md:text-[100px] font-black tracking-tighter leading-none uppercase italic text-impact text-slate-950 mb-20">
             Establish<br /><span className="text-red-600">Bio-Link.</span>
           </h3>
           
           <Link to="/become-donor" className="inline-flex items-center gap-12 bg-slate-950 text-white px-24 py-12 rounded-[50px] font-black text-[22px] uppercase tracking-[0.5em] hover:bg-red-600 transition-all shadow-3xl group active:scale-95 text-impact">
             Deploy Node Protocol <ChevronRight size={48} className="group-hover:translate-x-8 transition-transform" />
           </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
