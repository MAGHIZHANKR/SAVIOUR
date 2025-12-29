
import React from 'react';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Target, 
  Activity, 
  Globe, 
  Layers, 
  Flame,
  ArrowRight
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const pillars = [
    { 
      title: "Real-time Pulse", 
      desc: "Our proprietary algorithm tracks regional blood shortages in milliseconds, deploying requests to the nearest matching heroes instantly.",
      icon: <Activity className="text-red-600" size={32} />
    },
    { 
      title: "Bio-Encryption", 
      desc: "Donor data is secured using advanced cryptographic standards, ensuring absolute confidentiality of the hero network.",
      icon: <Shield className="text-zinc-900" size={32} />
    },
    { 
      title: "Gamified Impact", 
      desc: "We've transformed life-saving into an RPG-style experience. Earn HP (Hero Points) and unlock badges for your contribution.",
      icon: <Zap className="text-red-600" size={32} />
    },
    { 
      title: "Neural Network", 
      desc: "Decentralized architecture connects hospitals, camps, and donors into a singular, self-healing lifeline ecosystem.",
      icon: <Cpu className="text-zinc-900" size={32} />
    }
  ];

  const milestones = [
    { year: '2023', event: 'PROJECT INITIATED', status: 'COMPLETED' },
    { year: '2024', event: 'NATIONWIDE DEPLOYMENT', status: 'ONGOING' },
    { year: '2025', event: 'AI PREDICTIVE SHORTAGE ENGINE', status: 'PLANNED' },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section: The Protocol */}
      <section className="bg-black text-white py-32 md:py-48 px-6 relative border-b border-zinc-900">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 border border-red-600/30 px-5 py-2 rounded-full text-red-500 text-[9px] font-black uppercase tracking-[0.4em] mb-12 animate-pulse">
            <Globe size={14} />
            <span>OPERATIONAL STATUS: GLOBAL CORE v2.5</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase italic mb-12 select-none">
            The Science Of<br /><span className="text-red-600">Bio-Heroism.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-zinc-500 font-medium leading-relaxed">
            SAVIOUR isn't just a platform; it's a technological protocol designed to eliminate the concept of "unavailability" in critical healthcare.
          </p>
        </div>
        
        {/* Background Decals */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      </section>

      {/* Innovation Pillars */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="group p-10 bg-zinc-50 rounded-[40px] border border-zinc-100 hover:bg-black hover:text-white transition-all duration-500 hover:-translate-y-4">
                <div className="mb-8 w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 group-hover:bg-zinc-900 group-hover:border-zinc-800 transition-colors shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{pillar.title}</h3>
                <p className="text-zinc-500 font-medium text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Vision: Large Typography Section */}
      <section className="py-48 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto text-center">
           <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.6em] mb-12 block">The Mission Manifest</span>
           <h2 className="text-5xl md:text-8xl font-black text-black tracking-tighter leading-[0.9] uppercase italic mb-16">
            Eliminating The Wait.<br />
            <span className="text-zinc-300">Empowering The Soul.</span><br />
            Saving The Future.
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-24">
             <div className="flex flex-col items-center">
               <span className="text-5xl font-black italic mb-2">146ms</span>
               <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Response Latency</span>
             </div>
             <div className="w-px h-16 bg-zinc-200 hidden md:block"></div>
             <div className="flex flex-col items-center">
               <span className="text-5xl font-black italic mb-2 text-red-600">100%</span>
               <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Donor Verification</span>
             </div>
             <div className="w-px h-16 bg-zinc-200 hidden md:block"></div>
             <div className="flex flex-col items-center">
               <span className="text-5xl font-black italic mb-2">0</span>
               <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Processing Fees</span>
             </div>
          </div>
        </div>
      </section>

      {/* Architecture Timeline */}
      <section className="py-48 px-6 bg-black text-white relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
           <div className="lg:w-1/3 sticky top-32">
             <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.5em] mb-8 block">Roadmap</span>
             <h2 className="text-6xl font-black tracking-tighter leading-none uppercase italic mb-8">Evolution<br />Protocol.</h2>
             <p className="text-zinc-500 font-medium text-sm leading-relaxed">
               Our journey from a local initiative to a high-frequency bio-response network. We are constantly iterating on the architecture of empathy.
             </p>
           </div>
           
           <div className="lg:w-2/3 space-y-4 w-full">
              {milestones.map((m, idx) => (
                <div key={idx} className="group p-12 bg-zinc-900/50 border border-zinc-800 rounded-[40px] flex items-center justify-between hover:bg-zinc-800 transition-all border-l-4 hover:border-l-red-600">
                  <div className="space-y-2">
                    <span className="text-red-600 font-black text-sm tracking-widest">{m.year}</span>
                    <h4 className="text-3xl font-black tracking-tighter uppercase italic">{m.event}</h4>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 border border-zinc-700 rounded-full text-zinc-500 group-hover:text-white group-hover:border-white transition-all">
                    {m.status}
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Innovation CTA */}
      <section className="py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-zinc-950 text-white rounded-[60px] p-24 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1),transparent)]"></div>
           <Flame className="text-red-600 mx-auto mb-10" size={64} />
           <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8 relative z-10">Join The Core.</h3>
           <p className="text-zinc-400 font-medium mb-12 max-w-lg mx-auto relative z-10">
             Ready to become part of the most advanced life-saving network ever built?
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-red-600 text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-red-700 transition-all shadow-xl group">
                Initialize Account <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
