
import React from 'react';
import { 
  Zap, 
  Target, 
  Activity, 
  Globe, 
  Droplet, 
  Dna, 
  Server, 
  Users,
  ChevronRight,
  Cpu,
  Database,
  ShieldCheck,
  Heart,
  Microscope,
  Stethoscope,
  Network,
  ClipboardCheck,
  Flag
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: "Bio-Asset Integrity",
      desc: "Every unit of blood is tracked via our proprietary Bio-Sync protocol, ensuring 100% chain-of-custody transparency from extraction to transfusion.",
      icon: <ShieldCheck className="text-red-600" size={32} />,
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800"
    },
    {
      title: "Real-Time Logistics",
      desc: "Our decentralized node network reduces emergency response times by 40% using precision matching algorithms and localized donor routing.",
      icon: <Network className="text-red-600" size={32} />,
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
    },
    {
      title: "Human Capital Support",
      desc: "We prioritize the health of our donors. Our system implements rigorous recovery intervals and physiological monitoring to ensure zero-risk participation.",
      icon: <Heart className="text-red-600" size={32} />,
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800"
    }
  ];

  const technicalSpecs = [
    { label: "Deployment Nodes", value: "250+ active sectors" },
    { label: "Data Integrity", value: "99.99% sync rate" },
    { label: "Extraction Safety", value: "Global Grade A" },
    { label: "Supply Resilience", value: "Type O-Neg Priority" }
  ];

  return (
    <div className="bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      {/* SECTION 1: Strategic Briefing Hero */}
      <section className="relative pt-32 pb-64 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 scale-105"
            alt="Advanced Medical Lab"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 bg-red-600/10 border border-red-600/30 px-6 py-2 rounded-full text-red-500 text-[9px] font-black uppercase tracking-[0.5em] mb-12">
              <Activity size={14} className="animate-pulse" />
              <span>Sovereign Health Infrastructure // v4.0.1</span>
            </div>
            <h1 className="text-7xl md:text-[130px] font-black tracking-tighter leading-[0.85] uppercase italic mb-12 text-impact text-white">
              The Bio-Link<br /><span className="text-red-600">Standard.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 font-bold leading-tight italic border-l-4 border-red-600 pl-10 max-w-2xl">
              Saviour is the operational backbone of emergency blood logistics, synchronizing human empathy with industrial-grade technology.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Technical Performance Metrics */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 mb-32 z-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {technicalSpecs.map((spec, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[32px] shadow-2xl border border-slate-100 group hover:bg-slate-950 transition-all duration-500">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-red-500">{spec.label}</p>
              <p className="text-2xl font-black text-slate-900 italic uppercase tracking-tighter text-impact group-hover:text-white">{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Detailed Methodology */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-32">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop" 
                className="rounded-[60px] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-slate-50 relative z-10"
                alt="Professional Medical Research"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600 rounded-full blur-[100px] opacity-10"></div>
              <div className="absolute -bottom-10 -right-10 glass-panel p-10 rounded-[40px] border border-slate-200 z-20 shadow-2xl">
                <p className="text-4xl font-black text-red-600 italic text-impact">15min</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Average Extraction Cycle</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-red-600 font-black text-[12px] uppercase tracking-[1em] mb-8 block">Operational Mandate</span>
            <h2 className="text-6xl font-black text-slate-950 tracking-tighter uppercase italic mb-10 text-impact leading-none">Why It<br />Matters.</h2>
            <div className="space-y-8 text-lg font-bold text-slate-500 italic leading-relaxed">
              <p>
                Biological assets cannot be replicated in a laboratory. Human blood remains a non-synthetic, high-value resource essential for trauma management, oncology, and surgical recovery.
              </p>
              <p>
                Our mission is to eliminate supply-chain friction, ensuring that critical blood groups are mobilized within minutes of a declared requirement.
              </p>
              <div className="flex items-center gap-6 pt-8">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Specialist" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">JOIN 4,800+ REGISTERED SPECIALISTS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Professional Pillars */}
      <section className="py-40 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 opacity-[0.02] rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
             <span className="text-red-600 font-black text-[14px] uppercase tracking-[1.2em] mb-8 block">Core Infrastructure</span>
             <h2 className="text-7xl font-black text-slate-950 tracking-tighter uppercase italic text-impact leading-none">The Three Pillars.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white rounded-[48px] overflow-hidden border border-slate-200 shadow-xl group hover:-translate-y-4 transition-all duration-700">
                <div className="h-64 relative overflow-hidden">
                  <img src={val.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s]" alt={val.title} />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-red-950/20 transition-all"></div>
                </div>
                <div className="p-12">
                   <div className="mb-8">{val.icon}</div>
                   <h4 className="text-2xl font-black text-slate-900 uppercase italic mb-4 text-impact">{val.title}</h4>
                   <p className="text-slate-500 font-bold leading-relaxed italic">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Systems Architecture (Interactive feel) */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-[80px] p-20 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 p-20 opacity-10">
             <Dna size={400} className="text-red-600 animate-float" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
               <span className="text-red-500 font-black text-[14px] uppercase tracking-[1em] mb-12 block">System Stack</span>
               <h2 className="text-7xl font-black text-white tracking-tighter leading-[0.85] uppercase italic text-impact mb-16">Intelligence<br />Logistics.</h2>
               <div className="space-y-6">
                 {[
                   { icon: <Cpu />, label: "Precision Extraction Tracking", value: "Bio-Sync v4.0" },
                   { icon: <Database />, label: "Encrypted Global Node Grid", value: "Distributed-Ledger" },
                   { icon: <Globe />, label: "Regional Fleet Deployment", value: "Tactical Routing" }
                 ].map((stack, i) => (
                   <div key={i} className="flex items-center gap-8 bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-all">
                      <div className="text-red-600">{stack.icon}</div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stack.label}</p>
                        <p className="text-lg font-black text-white italic text-impact">{stack.value}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative">
               <div className="glass-panel p-16 rounded-[60px] border border-white/10 relative z-10 text-center">
                 <div className="w-24 h-24 bg-red-600 rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-[0_0_50px_rgba(220,38,38,0.5)] animate-pulse">
                   <Droplet className="text-white fill-white" size={48} />
                 </div>
                 <h3 className="text-5xl font-black text-white italic text-impact mb-6">SAVIOUR_GRID</h3>
                 <p className="text-slate-400 font-bold uppercase text-[12px] tracking-[0.4em] mb-12 italic">Established & Secure since 2025</p>
                 <button className="w-full bg-white text-slate-950 py-6 rounded-2xl font-black text-[12px] uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all text-impact">
                   View Documentation
                 </button>
               </div>
               <div className="absolute -inset-10 border-2 border-red-600/10 rounded-[80px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Rules of Protocol */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
               <span className="text-red-600 font-black text-[14px] uppercase tracking-[0.6em] mb-4 block">Compliance Layer</span>
               <h2 className="text-6xl font-black text-slate-950 tracking-tighter uppercase italic text-impact leading-none">Operational<br />Guidelines.</h2>
            </div>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic max-w-xs text-right">Mandatory requirements for all registered Bio-Link Personnel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { icon: <ClipboardCheck />, title: "Eligibility Protocol", points: ["Age: 18 - 65 Standard", "Weight: Min 45kg Extraction Buffer", "Interval: 90-Day Bio-Recovery Cycle"] },
              { icon: <Flag />, title: "Ethical Protocol", points: ["Voluntary Deployment Only", "Verified Medical Signal Only", "100% Transparency Guarantee"] }
            ].map((rule, i) => (
              <div key={i} className="bg-white border-4 border-slate-100 p-16 rounded-[60px] shadow-sm hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {rule.icon}
                </div>
                <h4 className="text-3xl font-black text-slate-900 uppercase italic mb-8 text-impact">{rule.title}</h4>
                <ul className="space-y-4">
                  {rule.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-4 text-slate-500 font-bold text-lg italic">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Professional Seal */}
      <footer className="py-40 border-t border-slate-100 bg-white flex flex-col items-center">
        <div className="opacity-10 hover:opacity-100 transition-opacity duration-1000 cursor-default text-center">
           <h4 className="text-[140px] font-black tracking-tighter uppercase italic text-slate-950 leading-none text-impact">SAVIOUR</h4>
           <p className="text-[12px] font-black uppercase tracking-[1.5em] text-slate-950 -mt-2">GLOBAL HEALTH INFRASTRUCTURE 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
