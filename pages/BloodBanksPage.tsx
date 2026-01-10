
import React from "react";
import { PhoneCall, MapPin, Droplet, Clock, ShieldCheck, Search, Navigation } from "lucide-react";

const BloodBanksPage: React.FC = () => {
  const bloodBanks = [
    {
      name: "Govt Blood Bank – Chennai",
      contact: "04425305000",
      address: "Rajiv Gandhi Govt General Hospital, Chennai",
      groups: ["O+", "A+", "B+", "AB+", "Platelets"],
      distance: "2.3 km",
      open: true,
      sector: "Public Hub"
    },
    {
      name: "Apollo Blood Centre",
      contact: "04428293333",
      address: "Apollo Hospital, Greams Road, Chennai",
      groups: ["O-", "A-", "B-", "AB-"],
      distance: "4.8 km",
      open: true,
      sector: "Private Network"
    },
    {
      name: "Red Cross Society Bank",
      contact: "04429998888",
      address: "Anna Nagar, Chennai",
      groups: ["O+", "B+", "Platelets"],
      distance: "6.1 km",
      open: false,
      sector: "NGO Hub"
    },
    {
      name: "SRMC Blood Bank",
      contact: "04424768403",
      address: "Porur, Chennai",
      groups: ["All Groups Available"],
      distance: "12.4 km",
      open: true,
      sector: "Institutional"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans selection:bg-red-600 selection:text-white pb-40">
      {/* 1. HERO HEADER (Size Rank 1) */}
      <section className="bg-slate-950 text-white pt-32 pb-48 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none blood-grid"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 border border-red-600/30 px-6 py-2 rounded-full text-red-600 text-[10px] font-black uppercase tracking-[0.5em] mb-12 animate-pulse">
            <ShieldCheck size={14} />
            <span>Regional Sector Assets Online</span>
          </div>

          <h1 className="text-[12vw] md:text-[180px] font-black leading-[0.7] tracking-tighter uppercase italic text-impact mb-12 select-none drop-shadow-2xl">
            DIRECTORY
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl font-bold italic leading-tight mb-20 px-4 border-l-4 border-red-600/40 text-slate-400">
            Real-time logistics feed for blood asset accessibility. <br className="hidden md:block" />
            Verified nodes across the Chennai sector.
          </p>
        </div>
      </section>

      {/* 2. SEARCH BAR: (Size Rank 2) */}
      <section className="max-w-5xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-3xl border border-slate-100 p-4 flex items-center">
          <Search className="text-slate-300 ml-6" size={24} />
          <input 
            type="text" 
            placeholder="Filter by city, area, or hospital name..."
            className="flex-grow px-8 py-6 font-bold text-lg focus:outline-none placeholder:text-slate-300 italic"
          />
          <button className="hidden md:block bg-red-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-[11px] tracking-widest hover:bg-slate-950 transition-all shadow-xl active:scale-95 text-impact">
            Search Nodes
          </button>
        </div>
      </section>

      {/* 3. BLOOD BANK LIST: (Size Rank 3) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {bloodBanks.map((bank, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 rounded-[48px] p-12 shadow-2xl hover:border-red-600/30 transition-all duration-700 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Navigation size={120} />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8 relative z-10">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 italic">{bank.sector}</span>
                    <span
                      className={`text-[9px] font-black uppercase px-4 py-1.5 rounded-lg border ${
                        bank.open
                          ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                          : "bg-red-50 text-red-600 border-red-100"
                      }`}
                    >
                      {bank.open ? "Online / Open" : "Closed"}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black text-slate-950 italic uppercase tracking-tighter text-impact">{bank.name}</h3>
                  <div className="flex items-center gap-2 text-slate-400 mt-2">
                    <MapPin size={16} />
                    <p className="text-sm font-bold italic">{bank.address}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-4xl font-black italic tracking-tighter text-slate-950 text-impact">{bank.distance}</div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">From Your Node</p>
                </div>
              </div>

              {/* BLOOD GROUPS AVAILABILITY */}
              <div className="flex flex-wrap gap-4 mb-12 relative z-10">
                {bank.groups.map((g) => (
                  <span
                    key={g}
                    className="flex items-center gap-2 bg-slate-50 border border-slate-100 text-slate-900 px-6 py-3 rounded-2xl text-[12px] font-black uppercase shadow-sm group-hover:bg-red-50 group-hover:border-red-100 group-hover:text-red-600 transition-colors"
                  >
                    <Droplet size={14} className="fill-current" /> {g}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                <a
                  href={`tel:${bank.contact}`}
                  className="flex-1 flex items-center justify-center gap-4 bg-red-600 text-white py-8 rounded-3xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-red-600/20 hover:bg-slate-950 transition-all active:scale-95 text-impact"
                >
                  <PhoneCall size={20} /> Establish Call
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    bank.address
                  )}`}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-4 bg-slate-900 text-white py-8 rounded-3xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl hover:bg-red-600 transition-all active:scale-95 text-impact"
                >
                  <Navigation size={20} /> Navigate Route
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER ALERT SECTION (Size Rank 4) */}
      <section className="bg-slate-50 py-32 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl text-red-600">
            <Clock size={40} className="animate-spin-slow" />
          </div>
          <h4 className="text-3xl font-black italic uppercase text-impact text-slate-900 mb-6 tracking-tight">System Integrity Check</h4>
          <p className="text-slate-400 font-bold leading-relaxed italic mb-12 max-w-lg mx-auto">All directories are updated every 60 minutes via medical council sync. For extreme emergencies, use the SOS protocol on the dashboard.</p>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black italic text-impact text-slate-950">1,240+</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sector Units</span>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-black italic text-impact text-slate-950">99.9%</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sync Integrity</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BloodBanksPage;
