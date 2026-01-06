
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Activity, 
  Users, 
  Droplet, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Target, 
  Radar, 
  ShieldAlert, 
  ChevronRight, 
  ShieldCheck,
  Coins,
  Clock,
  Gift
} from 'lucide-react';
import { BloodGroup } from '../types';

// Precise order for the grid
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
  const [isSimulating, setIsSimulating] = useState(false);
  const [impactCount, setImpactCount] = useState(12480);

  useEffect(() => {
    const interval = setInterval(() => {
      setImpactCount(prev => prev + Math.floor(Math.random() * 2));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Active Donors', value: '146', icon: <Users size={20} />, color: 'bg-zinc-950' },
    { label: 'Lives Saved', value: '78', icon: <Heart size={20} />, color: 'bg-red-600' },
    { label: 'Impact Score', value: '12k', icon: <Activity size={20} />, color: 'bg-zinc-950' },
    { label: 'Drives', value: '0', icon: <Target size={20} />, color: 'bg-zinc-950' },
  ];

  const benefits = [
    { title: "Pure Impact", desc: "No fees. Just human heroism.", icon: <Coins className="text-red-600" size={24} /> },
    { title: "Instant Link", desc: "Connecting donors in real-time.", icon: <Zap className="text-white" size={24} /> },
    { title: "Time Value", desc: "60 minutes = 3 lives saved.", icon: <Clock className="text-red-600" size={24} /> },
    { title: "Post-Care", desc: "Hero recovery kits provided.", icon: <Gift className="text-white" size={24} /> },
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 2000);
  };

  return (
    <div className="flex flex-col bg-white selection:bg-red-600 selection:text-white">
      {/* Black Hero Section - Ready to Save Lives? */}
      <section className="bg-black text-white pt-24 pb-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 z-10 relative">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-3 bg-red-600/20 border border-red-600/40 px-4 py-1.5 rounded-full text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
              <Activity size={14} className="animate-pulse" />
              <span>Saviour Protocol: Operational</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] uppercase italic select-none">
              Ready to<br /><span className="text-red-600">Save Lives?</span>
            </h1>
            <p className="text-lg md:text-xl mb-14 max-w-lg font-medium text-zinc-400 leading-relaxed italic border-l-4 border-red-600 pl-6">
              Become a part of our dedicated community of blood donors and make a life-changing impact today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/become-donor" className="bg-red-600 text-white px-12 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_20px_50px_rgba(220,38,38,0.4)] flex items-center justify-center gap-3">
                Register as Hero <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 hidden lg:flex justify-center relative">
            <div className="w-80 h-80 bg-zinc-900/50 rounded-full border border-white/5 flex items-center justify-center backdrop-blur-3xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-red-600/5 group-hover:scale-110 transition-transform duration-1000"></div>
               <Droplet size={140} className="text-red-600 fill-red-600 drop-shadow-[0_0_50px_rgba(220,38,38,0.4)] animate-pulse" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Command Center */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 mb-40 z-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${stat.color} text-white rounded-[32px] p-10 flex flex-col justify-between h-64 border border-white/5 shadow-2xl transition-transform hover:scale-[1.03] hover:rotate-1`}>
              <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <div className="text-6xl font-black tracking-tighter mb-2 italic">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blood Intelligence Module - Fixed for O+/O- */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-24 text-center">
            <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.6em] mb-6 block">Module 01: Intelligence</span>
            <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none uppercase italic mb-12">Blood Sync<br />Grid.</h2>
            
            <div className="bg-zinc-50 border border-zinc-100 p-2 rounded-2xl flex flex-wrap justify-center gap-2 shadow-inner">
              {BLOOD_ORDER.map((bg) => (
                <button
                  key={bg}
                  onClick={() => setSelectedBlood(bg)}
                  className={`px-8 py-5 rounded-xl font-black text-lg transition-all border ${
                    selectedBlood === bg 
                      ? 'bg-green-500 border-green-500 text-white shadow-xl scale-110 z-10' 
                      : 'bg-white border-zinc-200 text-zinc-300 hover:border-red-600/40 hover:text-red-600'
                  }`}
                >
                  {bg}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              {/* Compatible Sources Grid */}
              <div className="bg-[#FFF4E5] rounded-[48px] p-12 border border-[#FFE0B2] shadow-sm relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-10">
                  <div className="bg-orange-500/10 p-3 rounded-xl"><Droplet className="text-orange-600" size={24} /></div>
                  <h3 className="text-xl font-black text-[#A64B00] uppercase italic tracking-tighter">You can receive from</h3>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
                  {BLOOD_ORDER.map(bg => {
                    const isCompatible = COMPATIBILITY_DATA[selectedBlood]?.receive.includes(bg);
                    return (
                      <div 
                        key={bg}
                        className={`h-20 rounded-2xl flex items-center justify-center font-black text-sm border-2 transition-all duration-700 ${
                          isCompatible 
                            ? 'bg-green-500 border-green-400 text-white shadow-lg scale-[1.02]' 
                            : 'bg-white border-zinc-100 text-zinc-200 opacity-20 scale-[0.98]'
                        }`}
                      >
                        {bg}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Compatible Recipients Grid */}
              <div className="bg-[#E3F2FD] rounded-[48px] p-12 border border-[#BBDEFB] shadow-sm relative overflow-hidden group">
                <div className="flex items-center gap-4 mb-10">
                  <div className="bg-blue-500/10 p-3 rounded-xl"><Heart className="text-blue-600" size={24} /></div>
                  <h3 className="text-xl font-black text-[#0D47A1] uppercase italic tracking-tighter">You can donate to</h3>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
                  {BLOOD_ORDER.map(bg => {
                    const isCompatible = COMPATIBILITY_DATA[selectedBlood]?.donate.includes(bg);
                    return (
                      <div 
                        key={bg}
                        className={`h-20 rounded-2xl flex items-center justify-center font-black text-sm border-2 transition-all duration-700 ${
                          isCompatible 
                            ? 'bg-blue-600 border-blue-500 text-white shadow-lg scale-[1.02]' 
                            : 'bg-white border-zinc-100 text-zinc-200 opacity-20 scale-[0.98]'
                        }`}
                      >
                        {bg}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-zinc-950 text-white rounded-[32px] p-8 flex items-center gap-8 border border-zinc-800">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center animate-pulse">
                  <Activity size={24} />
                </div>
                <div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-1">Intelligence Advisory</h4>
                   <p className="text-sm font-bold italic text-zinc-200">
                     {selectedBlood === BloodGroup.ABPositive ? "AB+ is the universal recipient - a critical node in our medical network." : 
                      selectedBlood === BloodGroup.ONegative ? "O- is the universal donor - a high-value strategic asset for all emergencies." :
                      `${selectedBlood} compatibility verified. Targeting local donors in ${selectedBlood} proximity groups.`}
                   </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-white rounded-[48px] p-12 h-full flex flex-col items-center justify-center text-center border border-zinc-100 shadow-[0_40px_100px_rgba(0,0,0,0.08)] relative overflow-hidden group">
                <div className={`relative mb-14 transition-all duration-1000 ${isSimulating ? 'scale-125' : 'scale-100'}`}>
                   <Droplet size={140} className={`relative z-10 transition-colors duration-700 ${isSimulating ? 'text-red-600 fill-red-600' : 'text-zinc-50 fill-zinc-50'}`} />
                   {isSimulating && (
                     <div className="absolute inset-0 border-4 border-red-600 rounded-full animate-ping"></div>
                   )}
                </div>
                
                <h4 className="text-6xl font-black mb-4 tracking-tighter uppercase italic text-black">Type: {selectedBlood}</h4>
                <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] mb-20">Operational Synchronization Ready</p>
                
                <button 
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="w-full bg-red-600 text-white py-8 rounded-[24px] font-black text-[11px] uppercase tracking-[0.4em] hover:bg-black transition-all disabled:opacity-50 relative z-10 shadow-2xl"
                >
                  {isSimulating ? 'Initiating Pulse...' : 'Simulate Donation'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Pulse Section */}
      <section className="bg-zinc-950 py-40 overflow-hidden relative border-y border-zinc-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>

        {/* Global Mission Ticker */}
        <div className="bg-red-600/5 border-y border-red-600/10 py-6 mb-32 relative z-10 group overflow-hidden whitespace-nowrap">
           <div className="flex animate-[scroll_50s_linear_infinite] group-hover:[animation-play-state:paused]">
             {[...Array(10)].map((_, i) => (
               <div key={i} className="flex items-center gap-12 px-16">
                 <ShieldAlert size={16} className="text-red-600 animate-pulse" />
                 <span className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.5em]">MISSION ID: SAV-X{i*24} | STATUS: INBOUND HERO | NODE: CBE_CENTRAL | ETA: {i*3+1} MINS</span>
                 <div className="w-2 h-2 bg-red-600 rounded-full"></div>
               </div>
             ))}
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
           <div>
              <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.6em] mb-8 block">Neural Dynamics</span>
              <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] uppercase italic mb-12">Tactical<br /><span className="text-red-600">Response.</span></h2>
              <p className="text-zinc-400 font-bold italic leading-relaxed text-lg mb-16 max-w-md">
                We monitor blood flows across regional nodes in real-time, matching compatible heroes with patients in seconds, not hours.
              </p>
              
              <div className="bg-white/5 p-12 rounded-[48px] border border-white/10 backdrop-blur-3xl group hover:border-red-600/50 transition-all duration-500">
                 <div className="text-8xl font-black text-white italic tracking-tighter mb-4 group-hover:text-red-600 transition-colors">
                    {impactCount.toLocaleString()}
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-600 flex items-center gap-4">
                    <ShieldCheck size={18} className="text-green-500" /> Lives synchronized for safety
                 </div>
              </div>
           </div>

           <div className="relative group flex justify-center">
              <div className="aspect-square w-full max-w-[500px] bg-zinc-900/40 rounded-full border border-white/5 flex items-center justify-center relative overflow-hidden p-20 shadow-[0_0_150px_rgba(220,38,38,0.15)]">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#dc2626_1px,_transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
                 <div className="w-full h-full border-4 border-white/5 rounded-full flex items-center justify-center relative">
                    <div className="absolute w-full h-[3px] bg-red-600/30 animate-[spin_5s_linear_infinite] shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
                    <div className="absolute w-[85%] h-[85%] border border-white/5 rounded-full"></div>
                    <div className="absolute w-[65%] h-[65%] border border-white/5 rounded-full"></div>
                    <div className="absolute w-[45%] h-[45%] border border-white/5 rounded-full"></div>
                    <div className="absolute top-[20%] right-[25%] w-5 h-5 bg-red-600 rounded-full blur-md animate-pulse"></div>
                    <div className="absolute bottom-[35%] left-[15%] w-3 h-3 bg-white rounded-full blur-sm animate-pulse [animation-delay:2s]"></div>
                 </div>
                 <div className="relative z-10 text-center">
                    <Radar className="text-red-600 mx-auto mb-6 animate-bounce" size={64} />
                    <p className="text-[10px] font-black text-white uppercase tracking-[0.5em] opacity-30">Sector Scan: Active</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* HIGH-MOTION MOVING BENEFITS TICKER - requested by user */}
      <section className="bg-white py-12 overflow-hidden border-b border-zinc-100">
         <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
            {[...Array(3)].map((_, groupIdx) => (
               <div key={groupIdx} className="flex items-center">
                  {benefits.map((benefit, idx) => (
                    <div key={`${groupIdx}-${idx}`} className="flex items-center px-16 gap-6">
                       <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center shadow-xl">
                          {benefit.icon}
                       </div>
                       <div className="flex flex-col">
                          <h3 className="text-2xl font-black text-black italic uppercase tracking-tighter">{benefit.title}</h3>
                          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{benefit.desc}</p>
                       </div>
                       <div className="w-2 h-2 bg-red-600 rounded-full mx-10"></div>
                    </div>
                  ))}
               </div>
            ))}
         </div>
      </section>

      {/* Global Contact Section */}
      <section className="bg-white py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="flex flex-col items-center text-center">
              <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.6em] mb-10 block">Command HQ</span>
              <h2 className="text-7xl md:text-[140px] font-black tracking-tighter leading-[0.8] uppercase italic mb-24 text-black">Get in<br />Touch.</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-6xl mb-32">
                <div className="flex flex-col items-center gap-8 group">
                   <div className="w-24 h-24 rounded-[32px] border border-zinc-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-2xl scale-110">
                      <Phone size={32} />
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">Tactical Hotlink</p>
                      <span className="text-3xl font-black italic tracking-tighter text-black">+91 91592 74334</span>
                   </div>
                </div>
                <div className="flex flex-col items-center gap-8 group">
                   <div className="w-24 h-24 rounded-[32px] border border-zinc-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-2xl scale-110">
                      <Mail size={32} />
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">Operational Inbox</p>
                      <span className="text-3xl font-black italic tracking-tighter text-black">ops@saviour.io</span>
                   </div>
                </div>
                <div className="flex flex-col items-center gap-8 group">
                   <div className="w-24 h-24 rounded-[32px] border border-zinc-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-2xl scale-110">
                      <MapPin size={32} />
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">Base of Operations</p>
                      <span className="text-3xl font-black italic tracking-tighter text-black">Coimbatore, Tamil Nadu</span>
                   </div>
                </div>
              </div>

              <div className="w-full max-w-3xl">
                 <Link to="/require-donor" className="w-full bg-zinc-950 text-white py-10 rounded-[32px] font-black text-[12px] uppercase tracking-[0.5em] hover:bg-red-700 transition-all shadow-[0_30px_80px_rgba(0,0,0,0.3)] flex items-center justify-center gap-6 group">
                   Establish Tactical Support Link <ChevronRight size={24} className="group-hover:translate-x-4 transition-transform" />
                 </Link>
              </div>
           </div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}} />
      </section>
    </div>
  );
};

export default HomePage;
