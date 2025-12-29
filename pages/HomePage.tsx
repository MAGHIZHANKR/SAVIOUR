
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Activity, 
  Users, 
  Calendar, 
  Droplet, 
  Gamepad2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Gift, 
  Coins,
  Zap,
  Target
} from 'lucide-react';
import { BloodGroup } from '../types';

const COMPATIBILITY_DATA: Record<BloodGroup, { receive: BloodGroup[], donate: BloodGroup[] }> = {
  [BloodGroup.APositive]: {
    receive: [BloodGroup.APositive, BloodGroup.OPositive, BloodGroup.ANegative, BloodGroup.ONegative],
    donate: [BloodGroup.APositive, BloodGroup.ABPositive]
  },
  [BloodGroup.OPositive]: {
    receive: [BloodGroup.OPositive, BloodGroup.ONegative],
    donate: [BloodGroup.OPositive, BloodGroup.APositive, BloodGroup.BPositive, BloodGroup.ABPositive]
  },
  [BloodGroup.BPositive]: {
    receive: [BloodGroup.BPositive, BloodGroup.OPositive, BloodGroup.BNegative, BloodGroup.ONegative],
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
  const [selectedBlood, setSelectedBlood] = useState<BloodGroup>(BloodGroup.APositive);
  const [isSimulating, setIsSimulating] = useState(false);

  const stats = [
    { label: 'Active Donors', value: '146', icon: <Users size={20} />, color: 'bg-zinc-950' },
    { label: 'Lives Saved', value: '78', icon: <Heart size={20} />, color: 'bg-red-600' },
    { label: 'Impact Score', value: '12k', icon: <Activity size={20} />, color: 'bg-zinc-950' },
    { label: 'Drives', value: '0', icon: <Target size={20} />, color: 'bg-zinc-950' },
  ];

  const benefits = [
    { title: "Pure Impact", desc: "No fees. Just human heroism.", icon: <Coins className="text-red-600" size={32} /> },
    { title: "Instant Link", desc: "Connecting donors in real-time.", icon: <Zap className="text-zinc-900" size={32} /> },
    { title: "Time Value", desc: "60 minutes = 3 lives saved.", icon: <Clock className="text-red-600" size={32} /> },
    { title: "Post-Care", desc: "Hero recovery kits provided.", icon: <Gift className="text-zinc-900" size={32} /> },
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 2000);
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Interactive Hero Section */}
      <section className="bg-black text-white pt-24 pb-48 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 z-10 relative">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-3 bg-red-600/20 border border-red-600/40 px-4 py-1.5 rounded-full text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
              <Activity size={14} className="animate-pulse" />
              <span>System Online: 24/7 Response</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] uppercase italic select-none">
              Redefining<br /><span className="text-red-600">Heroism.</span>
            </h1>
            <p className="text-lg md:text-xl mb-14 max-w-lg font-medium text-zinc-500 leading-relaxed">
              SAVIOUR is the definitive platform for the modern lifesaver. Elite donor tracking, real-time requests, and local impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/become-donor" className="bg-red-600 text-white px-12 py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-red-700 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.4)] flex items-center justify-center gap-3">
                Register as Hero <ArrowRight size={16} />
              </Link>
              <Link to="/require-donor" className="bg-zinc-900 text-white px-12 py-5 rounded-xl border border-zinc-800 font-black text-[11px] uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all flex items-center justify-center">
                Search Database
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
              {/* Visual Tech Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent"></div>
              <div className="absolute w-full h-full border border-zinc-800 rounded-full animate-spin [animation-duration:15s] opacity-20"></div>
              <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-red-600/20 rounded-full animate-spin [animation-duration:10s] [animation-direction:reverse]"></div>
              
              <div className="relative z-10 bg-zinc-900/50 backdrop-blur-3xl p-16 rounded-full border border-zinc-800 shadow-2xl overflow-hidden group">
                 <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors"></div>
                 <Droplet size={140} className="text-red-600 fill-red-600 relative z-10 drop-shadow-[0_0_30px_rgba(220,38,38,0.6)] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Board */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 mb-40 z-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${stat.color} text-white rounded-3xl p-10 flex flex-col justify-between h-64 border border-white/5 shadow-2xl transition-transform hover:scale-[1.03]`}>
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <div className="text-5xl font-black tracking-tighter mb-2">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Hub: Blood Compatibility */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">Module 01: Education</span>
              <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.9] uppercase italic mb-8">Blood Type<br />Intelligence.</h2>
              <p className="text-zinc-500 font-medium">Interactive compatibility matrix. Select a patient's blood group to visualize valid donors and compatible recipients.</p>
            </div>
            <div className="flex items-center gap-4 bg-zinc-50 p-2 rounded-2xl border border-zinc-100 shadow-sm">
              <div className="bg-black text-white px-8 py-5 rounded-xl flex items-center gap-4">
                <Gamepad2 size={24} className="text-red-600" />
                <span className="font-black text-[10px] uppercase tracking-widest leading-none">Global Rank: #1 Platform</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-zinc-50 rounded-[40px] p-12 border border-zinc-200 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px]"></div>
                
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] mb-10">Target Patient Blood Type</p>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-16">
                  {Object.values(BloodGroup).map((bg) => (
                    <button
                      key={bg}
                      onClick={() => setSelectedBlood(bg)}
                      className={`h-20 rounded-xl font-black text-lg transition-all border-2 ${
                        selectedBlood === bg 
                          ? 'bg-black border-black text-white scale-110 shadow-2xl z-10' 
                          : 'bg-white border-zinc-100 text-zinc-300 hover:border-red-600/20 hover:text-red-600'
                      }`}
                    >
                      {bg}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-[32px] p-8 border border-zinc-100 shadow-sm">
                    <h3 className="text-[10px] font-black text-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div> Acceptable Sources
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Object.values(BloodGroup).map(bg => (
                        <div 
                          key={bg}
                          className={`px-5 py-3 rounded-lg font-black text-[11px] tracking-widest transition-all ${
                            COMPATIBILITY_DATA[selectedBlood].receive.includes(bg)
                              ? 'bg-red-600 text-white shadow-lg'
                              : 'bg-zinc-50 text-zinc-200 border border-zinc-100'
                          }`}
                        >
                          {bg}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-[32px] p-8 border border-zinc-100 shadow-sm">
                    <h3 className="text-[10px] font-black text-black uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                      <div className="w-2 h-2 bg-zinc-900 rounded-full"></div> Target Recipients
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Object.values(BloodGroup).map(bg => (
                        <div 
                          key={bg}
                          className={`px-5 py-3 rounded-lg font-black text-[11px] tracking-widest transition-all ${
                            COMPATIBILITY_DATA[selectedBlood].donate.includes(bg)
                              ? 'bg-black text-white shadow-lg'
                              : 'bg-zinc-50 text-zinc-200 border border-zinc-100'
                          }`}
                        >
                          {bg}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 h-full">
              <div className="bg-zinc-950 text-white rounded-[40px] p-12 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group border border-zinc-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.15),transparent)] transition-all group-hover:scale-150"></div>
                
                <div className={`relative mb-12 transition-all duration-1000 ${isSimulating ? 'scale-125 rotate-[360deg]' : 'scale-100'}`}>
                   <Droplet size={110} className={`relative z-10 transition-colors duration-500 ${isSimulating ? 'text-red-600 fill-red-600' : 'text-zinc-700 fill-zinc-900'}`} />
                </div>
                
                <h4 className="text-6xl font-black mb-3 tracking-tighter uppercase italic">{selectedBlood}</h4>
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] mb-16">Operational Status: Ready</p>
                
                <button 
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="w-full bg-white text-black py-6 rounded-xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-red-600 hover:text-white transition-all disabled:opacity-50 relative z-10"
                >
                  {isSimulating ? 'Processing Pulse...' : 'Simulate Pulse'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Matrix */}
      <section className="py-40 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="group">
                   <div className="mb-10 w-24 h-24 bg-white rounded-3xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all border border-zinc-200 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-3">
                     {benefit.icon}
                   </div>
                   <h3 className="text-2xl font-black text-black mb-4 uppercase italic tracking-tighter">{benefit.title}</h3>
                   <p className="text-zinc-500 font-medium leading-relaxed text-sm">{benefit.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* High-Impact Contact */}
      <section className="bg-black text-white py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="text-left">
                <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.5em] mb-8 block">Operational HQ</span>
                <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase italic mb-16">Establish<br />Direct Link.</h2>
                <div className="space-y-10">
                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600/10 transition-all">
                      <Phone size={24} className="text-red-600" />
                    </div>
                    <span className="text-3xl font-black tracking-tighter text-zinc-500 group-hover:text-white transition-colors">+91 91592 74334</span>
                  </div>
                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600/10 transition-all">
                      <Mail size={24} className="text-red-600" />
                    </div>
                    <span className="text-3xl font-black tracking-tighter text-zinc-500 group-hover:text-white transition-colors">ops@saviour.io</span>
                  </div>
                  <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600/10 transition-all">
                      <MapPin size={24} className="text-red-600" />
                    </div>
                    <span className="text-3xl font-black tracking-tighter text-zinc-500 group-hover:text-white transition-colors">Coimbatore, IN</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/40 p-16 rounded-[60px] border border-zinc-800 backdrop-blur-3xl shadow-2xl relative">
                 <div className="grid grid-cols-1 gap-6">
                    <input type="text" placeholder="IDENTITY NAME" className="bg-black border border-zinc-800 px-10 py-7 rounded-2xl font-black text-[10px] tracking-widest focus:border-red-600 outline-none transition-all placeholder:text-zinc-700" />
                    <input type="email" placeholder="EMAIL ADDRESS" className="bg-black border border-zinc-800 px-10 py-7 rounded-2xl font-black text-[10px] tracking-widest focus:border-red-600 outline-none transition-all placeholder:text-zinc-700" />
                    <textarea placeholder="MISSION PARAMETERS" rows={4} className="bg-black border border-zinc-800 px-10 py-7 rounded-2xl font-black text-[10px] tracking-widest focus:border-red-600 outline-none transition-all placeholder:text-zinc-700 resize-none"></textarea>
                    <button className="bg-red-600 text-white py-8 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-red-700 transition-all shadow-xl group">
                      Initialize Deployment <ArrowRight size={16} className="inline ml-3 group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
              </div>
           </div>
        </div>
        
        {/* Background Decals */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[200px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
      </section>
    </div>
  );
};

export default HomePage;
