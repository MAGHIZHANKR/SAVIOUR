
import React from 'react';
import { 
  Zap, 
  Shield, 
  Target, 
  Activity, 
  Globe, 
  Droplet, 
  Dna, 
  Server, 
  Users,
  MessageSquare,
  ChevronRight,
  Terminal,
  Cpu,
  Database,
  Lock,
  FileText,
  AlertCircle,
  // Added ShieldAlert to fix missing import error
  ShieldAlert
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const protocols = [
    { 
      id: "P-101",
      title: "Bio-Sync Matching Algorithm", 
      desc: "Our matching engine utilizes localized geo-fencing and blood-type compatibility matrices to identify the most eligible donors within a 15km radius of the hospital venue.",
      specs: ["Latency: < 150ms", "Geo-Precision: ±5m", "Priority: FIFO + Emergency Weighting"]
    },
    { 
      id: "P-102",
      title: "Zero-Knowledge Encryption", 
      desc: "Donor identities are hashed and stored using AES-256 standards. Direct contact information is only unmasked once a donor accepts a verified emergency request.",
      specs: ["Standards: HIPAA Compliant", "Encryption: AES-256", "Auth: Multi-Factor Protocol"]
    },
    { 
      id: "P-103",
      title: "Regional Node Architecture", 
      desc: "Saviour operates on a decentralized server network. Each city acts as an independent operational node, ensuring 100% uptime even during regional network failures.",
      specs: ["Nodes: Localized Clusters", "Redundancy: 3x Mirroring", "Uptime: 99.99% Guaranteed"]
    }
  ];

  const systemSpecs = [
    { label: "Deployment Logic", value: "Smart-Queue v4.2" },
    { label: "Data Integrity", value: "Blockchain Verified" },
    { label: "Max Request Capacity", value: "10,000 / sec" },
    { label: "Encryption Layer", value: "End-to-End TLS 1.3" },
    { label: "Geo-Fencing Radius", value: "Dynamic (5km - 50km)" },
    { label: "Identity Verification", value: "Biometric / OTP Sync" }
  ];

  const lifecycleSteps = [
    { step: "01", title: "Request Initialization", body: "Requesters provide verified hospital documentation and attender contact details through the mission portal." },
    { step: "02", title: "Compatibility Filtering", body: "The system identifies all donors with compatible blood groups currently within the operational radius of the hospital." },
    { step: "03", title: "Direct Broadcast", body: "Push notifications are dispatched to eligible 'Active' donors. The first 10 responders are moved to the 'Mission Ready' state." },
    { step: "04", title: "Hero Verification", body: "Donors provide their 'Hero Key' (OTP) at the venue, which the requester verifies to confirm physical arrival." },
    { step: "05", title: "Impact Logging", body: "Upon successful donation, units are updated, the mission is closed, and donor Hero Points (HP) are calculated." }
  ];

  return (
    <div className="bg-[#F8F9FA] text-[#212529] selection:bg-red-600 selection:text-white pb-32">
      {/* Hero: Briefing Header */}
      <section className="bg-black text-white pt-32 pb-48 px-6 relative border-b border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <div className="inline-flex items-center space-x-3 bg-red-600/20 border border-red-600/40 px-5 py-2 rounded-full text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12">
              <Terminal size={14} />
              <span>OFFICIAL OPERATIONAL BRIEFING</span>
            </div>
            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-none uppercase italic mb-12 select-none">
              SAVIOUR<br /><span className="text-red-600">PROTOCOLS.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-zinc-400 font-bold leading-relaxed italic border-l-4 border-red-600 pl-8">
              A comprehensive technical overview of the Saviour Command System. This document outlines the infrastructure, security, and deployment logistics of our regional blood network.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Framework: Technical Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 mb-32 z-20 relative">
        <div className="bg-white border border-zinc-200 rounded-[32px] shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {systemSpecs.map((spec, idx) => (
            <div key={idx} className="p-10 border-r border-b border-zinc-100 last:border-r-0 group hover:bg-zinc-50 transition-colors">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">{spec.label}</p>
              <p className="text-xl font-black text-zinc-800 uppercase italic tracking-tighter">{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Protocol: Deep Dive */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">Section 01</span>
              <h2 className="text-5xl font-black text-black tracking-tighter uppercase italic leading-tight mb-8">Infrastructure<br />Architecture.</h2>
              <p className="text-zinc-500 font-bold leading-relaxed">
                Saviour is built on a high-availability stack designed to process emergency data with zero latency. Every interaction is governed by strict operational protocols.
              </p>
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 text-zinc-800 font-black text-[10px] uppercase tracking-widest">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Network Integrity: Verified
                </div>
                <div className="flex items-center gap-4 text-zinc-800 font-black text-[10px] uppercase tracking-widest">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Node Synchronization: 100%
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-10">
              {protocols.map((p) => (
                <div key={p.id} className="bg-white p-12 rounded-[40px] border border-zinc-200 shadow-sm">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter">{p.title}</h3>
                    <span className="text-[10px] font-black bg-zinc-100 text-zinc-400 px-4 py-1.5 rounded-full">{p.id}</span>
                  </div>
                  <p className="text-zinc-600 font-medium leading-relaxed mb-10 text-lg">{p.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {p.specs.map((s, i) => (
                      <div key={i} className="flex items-center gap-3 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                         <ChevronRight size={14} className="text-red-600" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-zinc-800">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Lifecycle: Step-by-Step */}
      <section className="py-40 px-6 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
             <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.5em] mb-6 block">Operational Flow</span>
             <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">The Mission<br />Lifecycle.</h2>
          </div>

          <div className="space-y-4">
            {lifecycleSteps.map((step) => (
              <div key={step.step} className="group bg-white/5 border border-white/10 hover:border-red-600/50 p-10 rounded-[40px] transition-all duration-500">
                <div className="flex flex-col md:flex-row items-center gap-12">
                   <div className="text-7xl font-black italic text-white/10 group-hover:text-red-600/20 transition-colors">{step.step}</div>
                   <div>
                      <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4">{step.title}</h4>
                      <p className="text-zinc-500 font-bold leading-relaxed max-w-2xl">{step.body}</p>
                   </div>
                   <div className="flex-grow hidden md:block"></div>
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <ChevronRight size={24} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules of Engagement: Guidelines */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-zinc-200 rounded-[48px] p-16 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5">
                <ShieldAlert size={200} className="text-black" />
             </div>
             <div className="relative z-10">
                <span className="text-red-600 font-black text-[11px] uppercase tracking-[0.4em] mb-8 block">Policy v2.0</span>
                <h2 className="text-5xl font-black tracking-tighter uppercase italic mb-12">Rules of<br />Engagement.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                   <div className="space-y-8">
                      <h5 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100 pb-4">Donor Obligations</h5>
                      <ul className="space-y-4 font-bold text-zinc-600 text-sm leading-relaxed">
                         <li className="flex items-start gap-4"><AlertCircle size={16} className="text-red-600 mt-1 flex-shrink-0" /> Accuracy in medical history disclosure is mandatory.</li>
                         <li className="flex items-start gap-4"><AlertCircle size={16} className="text-red-600 mt-1 flex-shrink-0" /> Commitments to requests must be honored to ensure patient safety.</li>
                         <li className="flex items-start gap-4"><AlertCircle size={16} className="text-red-600 mt-1 flex-shrink-0" /> Physical ID must be presented at the venue for final sync.</li>
                      </ul>
                   </div>
                   <div className="space-y-8">
                      <h5 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100 pb-4">Requester Obligations</h5>
                      <ul className="space-y-4 font-bold text-zinc-600 text-sm leading-relaxed">
                         <li className="flex items-start gap-4"><AlertCircle size={16} className="text-zinc-900 mt-1 flex-shrink-0" /> Verified hospital requisition forms are required for mission start.</li>
                         <li className="flex items-start gap-4"><AlertCircle size={16} className="text-zinc-900 mt-1 flex-shrink-0" /> Immediate update of mission status upon unit receipt.</li>
                         <li className="flex items-start gap-4"><AlertCircle size={16} className="text-zinc-900 mt-1 flex-shrink-0" /> Requesters must provide safe access for arriving heroes.</li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final Visual Seal */}
      <div className="py-24 border-t border-zinc-200 flex flex-col items-center opacity-20">
         <h4 className="text-[100px] font-black tracking-tighter uppercase italic text-zinc-900 select-none leading-none">SAVIOUR</h4>
         <p className="text-[10px] font-black uppercase tracking-[1em] text-zinc-900 -mt-2">SYSTEM DOCUMENTATION 2025</p>
      </div>
    </div>
  );
};

export default AboutPage;
