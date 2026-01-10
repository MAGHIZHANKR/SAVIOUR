
import React from "react";
import { 
  PhoneCall, 
  MapPin, 
  MessageCircle, 
  AlertTriangle, 
  ShieldAlert, 
  Droplet, 
  Clock, 
  Activity,
  ArrowRight,
  Navigation,
  FileText,
  User,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const EmergencyPage: React.FC = () => {
  const primaryHospital = {
    name: "KMCH - Kovai Medical Center and Hospital",
    contact: "04224323232",
    whatsapp: "919000000000",
    address: "Avinashi Road, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014",
  };

  const emergencyNumbers = [
    { label: "Central Ambulance", number: "108", icon: <Activity size={18} /> },
    { label: "Police Assistance", number: "100", icon: <ShieldAlert size={18} /> },
    { label: "Fire Station", number: "101", icon: <AlertTriangle size={18} /> },
    { label: "Blood Helpline", number: "1910", icon: <Droplet size={18} /> },
  ];

  const quickDirectory = [
    {
      name: "Govt Hospital Blood Bank",
      groups: "O+, A+, B+, AB+",
      contact: "0422-2301311",
      distance: "2.3 km",
      status: "OPEN 24/7",
      address: "Trichy Rd, Coimbatore"
    },
    {
      name: "Rotary Metro Blood Bank",
      groups: "All Groups Available",
      contact: "0422-2212345",
      distance: "4.8 km",
      status: "OPEN 24/7",
      address: "Race Course, Coimbatore"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans selection:bg-red-600 selection:text-white pb-32">
      {/* 1. HERO ALERT SECTION (Size Rank 1) */}
      <section className="bg-red-600 text-white pt-32 pb-48 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none blood-grid"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 bg-white/10 border border-white/20 px-8 py-3 rounded-full text-white text-[12px] font-black uppercase tracking-[0.5em] mb-12 animate-pulse">
            <AlertTriangle size={16} />
            <span>Priority Emergency Mode Active</span>
          </div>

          <h1 className="text-[12vw] md:text-[180px] font-black leading-[0.75] tracking-tighter uppercase italic text-impact mb-12 select-none drop-shadow-2xl">
            PRIORITY
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-bold italic leading-tight mb-20 px-4 border-l-4 border-white/30">
            Rapid response hub for critical biological asset recovery. <br className="hidden md:block" />
            Establish immediate link to recovery nodes.
          </p>
        </div>
      </section>

      {/* 2. PRIORITY DIRECTORY: (Size Rank 2) - MOVED TO TOP AS REQUESTED */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {quickDirectory.map((bank, i) => (
            <div key={i} className="bg-white rounded-[48px] shadow-3xl border border-slate-100 p-12 overflow-hidden group hover:border-red-600 transition-all duration-700">
               <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Droplet size={28} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-lg border border-emerald-100 italic">Target Sector HQ</span>
               </div>
               <h3 className="text-3xl font-black text-slate-950 italic uppercase tracking-tighter text-impact mb-2">{bank.name}</h3>
               <p className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-6">{bank.groups}</p>
               <p className="text-slate-400 font-bold italic mb-10 text-sm leading-relaxed">{bank.address}</p>
               
               <div className="grid grid-cols-2 gap-4">
                  <a href={`tel:${bank.contact}`} className="bg-red-600 text-white py-6 rounded-2xl font-black text-[12px] uppercase tracking-widest text-center hover:bg-slate-950 transition-colors shadow-lg shadow-red-600/20 text-impact">
                     Establish Call
                  </a>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(bank.address)}`} target="_blank" className="bg-slate-900 text-white py-6 rounded-2xl font-black text-[12px] uppercase tracking-widest text-center hover:bg-red-600 transition-colors shadow-lg text-impact">
                    Navigate
                  </a>
               </div>
            </div>
          ))}
        </div>

        {/* 3. REGISTERED INFO / HOSPITAL HUB (Size Rank 3) */}
        <div className="bg-slate-950 rounded-[64px] p-12 md:p-24 shadow-3xl relative overflow-hidden mb-32 border border-white/5">
          <div className="absolute top-0 right-0 p-24 opacity-[0.05]">
            <Zap size={300} className="text-red-600" />
          </div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
              <div className="max-w-xl">
                <span className="text-red-500 font-black text-[14px] uppercase tracking-[1em] mb-6 block">Clinical Dispatch Center</span>
                <h2 className="text-6xl md:text-[80px] font-black text-white tracking-tighter uppercase italic text-impact leading-[0.8]">Asset<br />Recovery.</h2>
              </div>
              <div className="bg-white/5 border border-white/10 px-8 py-4 rounded-3xl backdrop-blur-md">
                 <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1 animate-pulse">Pulse Status: ACTIVE</p>
                 <p className="text-white font-bold italic text-lg">{primaryHospital.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="col-span-1 lg:col-span-2 space-y-8">
                <div className="bg-white/5 p-12 rounded-[40px] border border-white/5 group hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-6 mb-8">
                    <User size={32} className="text-red-600" />
                    <h4 className="text-xl font-black text-white italic uppercase tracking-tight">Deployment Coordinator Contact</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <a href={`tel:${primaryHospital.contact}`} className="flex flex-col p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-red-600 transition-all group/link">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 group-hover/link:text-red-600">Immediate Phone Hub</p>
                      <span className="text-3xl font-black italic text-white text-impact tracking-tighter">{primaryHospital.contact}</span>
                    </a>
                    <a href={`https://wa.me/${primaryHospital.whatsapp}`} className="flex flex-col p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-emerald-500 transition-all group/link">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 group-hover/link:text-emerald-500">Secure WhatsApp Link</p>
                      <span className="text-3xl font-black italic text-white text-impact tracking-tighter">Sync Now</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 rounded-[40px] p-12 flex flex-col items-center justify-center text-center shadow-3xl shadow-red-600/30">
                <Navigation size={80} className="text-white mb-8 animate-bounce" />
                <h4 className="text-3xl font-black text-white italic uppercase text-impact mb-4">Final Sector Path</h4>
                <p className="text-red-100 font-bold italic text-sm mb-12">{primaryHospital.address}</p>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(primaryHospital.address)}`}
                  target="_blank"
                  className="w-full bg-white text-slate-950 py-6 rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all text-impact shadow-xl"
                >
                  Initiate Navigation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY HOTLINES (Size Rank 4) */}
      <section className="py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
          <div>
            <span className="text-red-600 font-black text-[14px] uppercase tracking-[1.5em] mb-12 block">Strategic Backup Nodes</span>
            <h3 className="text-5xl md:text-[80px] font-black tracking-tighter leading-[0.8] text-slate-950 italic uppercase text-impact mb-20">National<br />Hotlines.</h3>
            <p className="text-xl font-bold text-slate-400 italic max-w-md leading-relaxed">Redundant communication channels available even in complete network infrastructure failure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {emergencyNumbers.map((num, i) => (
              <a 
                key={i} 
                href={`tel:${num.number}`}
                className="bg-slate-50 p-12 rounded-[48px] border border-slate-100 group hover:bg-red-600 transition-all duration-700 shadow-xl flex flex-col justify-between h-72"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-white transition-all shadow-md">
                   {num.icon}
                </div>
                <div>
                   <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 group-hover:text-white/70 italic">{num.label}</p>
                   <span className="text-6xl font-black italic tracking-tighter text-slate-950 group-hover:text-white transition-colors text-impact leading-none">{num.number}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALL ASSETS LINK: SMALLEST (Size Rank 5) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-10">
             <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl animate-heartbeat">
                <FileText size={32} />
             </div>
             <div>
                <h4 className="text-2xl font-black italic uppercase tracking-tighter text-impact">Global Directory Data</h4>
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Comprehensive sector registry of all verified blood banks</p>
             </div>
          </div>
          <Link to="/blood-banks" className="px-16 py-7 bg-slate-950 text-white rounded-3xl font-black text-[13px] uppercase tracking-[0.5em] hover:bg-red-600 transition-all text-impact shadow-2xl group active:scale-95">
             Open Full Directory <ArrowRight size={20} className="inline ml-4 group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EmergencyPage;
