import React, { useState } from 'react';
import { Search, MapPin, Calendar, ExternalLink, ChevronLeft, ChevronRight, X, Building2, User, Clock, Download } from 'lucide-react';

const SuperAdminCamps: React.FC = () => {
  const [campFilter, setCampFilter] = useState<'All' | 'Upcoming' | 'Ongoing' | 'Completed'>('Upcoming');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState<any>(null);

  const mockCamps = [
    { 
      id: 'CAMP-001', 
      name: 'Rotary Club Mega Drive', 
      dateRange: '12 Dec 2025 - 14 Dec 2025', 
      location: 'City Town Hall, Coimbatore', 
      status: 'Upcoming',
      organizer: 'Rotary Club Central',
      orgType: 'NGO / Club',
      orgName: 'Rotary Club Central',
      organizerName: 'Suresh Kumar',
      mobile: '9843012345',
      email: 'rotary.cbe@gmail.com',
      state: 'Tamil Nadu',
      city: 'Coimbatore',
      startTime: '12/12/2025, 09:00 AM',
      endTime: '14/12/2025, 06:00 PM'
    },
    { 
      id: 'CAMP-002', 
      name: 'Corporate Life Savers', 
      dateRange: '10 Dec 2025 - 11 Dec 2025', 
      location: 'Tech Park SEZ, Chennai', 
      status: 'Ongoing',
      organizer: 'IT Solutions Ltd',
      orgType: 'Corporate Office',
      orgName: 'IT Solutions Ltd',
      organizerName: 'Priyanka R',
      mobile: '9123456789',
      email: 'hr@itsolutions.com',
      state: 'Tamil Nadu',
      city: 'Chennai',
      startTime: '10/12/2025, 10:00 AM',
      endTime: '11/12/2025, 04:00 PM'
    },
    { 
      id: 'CAMP-003', 
      name: 'Youth Red Cross Camp', 
      dateRange: '05 Dec 2025 - 06 Dec 2025', 
      location: 'Government Arts College, Salem', 
      status: 'Completed',
      organizer: 'YRC District Unit',
      orgType: 'College / University',
      orgName: 'Youth Red Cross',
      // Fix: Added missing opening quote for organizerName to correct syntax error
      organizerName: 'Dr. Ganesan',
      mobile: '9443210987',
      email: 'yrc.salem@gmail.com',
      state: 'Tamil Nadu',
      city: 'Salem',
      startTime: '05/12/2025, 08:30 AM',
      endTime: '06/12/2025, 05:30 PM'
    }
  ];

  const filteredCamps = mockCamps.filter(camp => 
    campFilter === 'All' ? true : camp.status === campFilter
  );

  const handleExportCSV = () => {
    const headers = ['ID', 'Camp Name', 'Organization', 'Location', 'City', 'Status', 'Start Time', 'End Time', 'Organizer Mobile'];
    const csvRows = [headers.join(',')];

    filteredCamps.forEach(camp => {
      const row = [
        camp.id,
        `"${camp.name}"`,
        `"${camp.orgName}"`,
        `"${camp.location}"`,
        `"${camp.city}"`,
        camp.status,
        `"${camp.startTime}"`,
        `"${camp.endTime}"`,
        camp.mobile
      ];
      csvRows.push(row.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Saviour_Blood_Camps_${campFilter}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (camp: any) => {
    setSelectedCamp(camp);
    setShowDetailModal(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {['All Camps', 'Upcoming', 'Ongoing', 'Completed'].map(label => {
            const value = label === 'All Camps' ? 'All' : label;
            const isActive = campFilter === value;
            return (
              <button 
                key={label} 
                onClick={() => setCampFilter(value as any)}
                className={`px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${
                  isActive ? 'bg-red-800 text-white shadow-lg' : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-300'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <button 
          onClick={handleExportCSV}
          className="flex items-center justify-center gap-2 bg-white border border-zinc-200 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:bg-zinc-50 shadow-sm"
        >
          <Download size={14} /> Export Report
        </button>
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden min-h-[400px]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Camp Name</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Date Range</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Location</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Status</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCamps.map(camp => (
              <tr key={camp.id} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                <td className="px-8 py-6">
                   <p className="font-bold text-sm text-zinc-800">{camp.name}</p>
                   <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mt-0.5">{camp.organizer}</p>
                </td>
                <td className="px-8 py-6 text-center">
                   <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-wide">{camp.dateRange}</p>
                </td>
                <td className="px-8 py-6 text-center">
                   <p className="text-zinc-500 text-[11px] font-bold uppercase truncate max-w-[200px] mx-auto">{camp.location}</p>
                </td>
                <td className="px-8 py-6 text-center">
                  <span className={`px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest border ${
                    camp.status === 'Ongoing' ? 'bg-green-50 text-green-700 border-green-100' :
                    camp.status === 'Upcoming' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                    'bg-zinc-50 text-zinc-400 border-zinc-100'
                  }`}>
                    {camp.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-center">
                  <button 
                    onClick={() => handleView(camp)}
                    className="bg-[#007BFF] text-white px-5 py-2 rounded text-[10px] font-black uppercase shadow-sm hover:bg-blue-700 transition-all"
                  >
                    More
                  </button>
                </td>
              </tr>
            ))}
            {filteredCamps.length === 0 && (
              <tr>
                <td colSpan={5} className="px-8 py-20 text-center text-zinc-300 font-black uppercase italic tracking-widest">No camps found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8 pb-10">
        <button className="px-6 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-200 transition-all">
          <ChevronLeft size={14} /> Previous
        </button>
        <button className="px-6 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-200 transition-all">
          Next <ChevronRight size={14} />
        </button>
      </div>

      {/* Camp Details Modal - High Fidelity Matching requests UI */}
      {showDetailModal && selectedCamp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[1px] p-6 overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 my-10 max-h-[95vh] flex flex-col">
             {/* Header */}
             <div className="p-10 flex justify-between items-center border-b border-zinc-100 sticky top-0 bg-white z-10 rounded-t-xl">
                <h3 className="text-[15px] font-black text-zinc-800 tracking-tight uppercase italic">CAMP DETAILS</h3>
                <button onClick={() => setShowDetailModal(false)} className="text-zinc-300 hover:text-black transition-colors">
                  <X size={20} className="border-2 border-zinc-200 rounded p-0.5" />
                </button>
             </div>
             
             <div className="p-12 space-y-12 overflow-y-auto flex-grow bg-white scrollbar-thin scrollbar-thumb-zinc-200">
                {/* Organiser Section */}
                <div className="space-y-10">
                   <div className="flex items-center gap-3 pb-2 border-b border-zinc-50">
                      <Building2 size={16} className="text-red-600" />
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Organization Info</h4>
                   </div>
                   <div className="grid grid-cols-2 gap-y-10 gap-x-12">
                      <DetailItem label="ORGANIZATION TYPE" value={selectedCamp.orgType} />
                      <DetailItem label="ORGANIZATION NAME" value={selectedCamp.orgName} />
                      <DetailItem label="ORGANIZER NAME" value={selectedCamp.organizerName} />
                      <DetailItem label="ORGANIZER MOBILE" value={selectedCamp.mobile} />
                      <DetailItem label="ORGANIZER EMAIL" value={selectedCamp.email} />
                   </div>
                </div>

                {/* Camp Venue & Timeline Section */}
                <div className="space-y-10">
                   <div className="flex items-center gap-3 pb-2 border-b border-zinc-50">
                      <Clock size={16} className="text-red-600" />
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Event Details</h4>
                   </div>
                   <div className="grid grid-cols-2 gap-y-10 gap-x-12">
                      <DetailItem label="CAMP NAME" value={selectedCamp.name} />
                      <DetailItem label="LOCATION" value={selectedCamp.location} />
                      <DetailItem label="CITY" value={selectedCamp.city} />
                      <DetailItem label="STATE" value={selectedCamp.state} />
                      <DetailItem label="START TIME" value={selectedCamp.startTime} />
                      <DetailItem label="END TIME" value={selectedCamp.endTime} />
                   </div>
                </div>

                {/* Footer Message */}
                <div className="pt-8 border-t border-zinc-100 text-center">
                   <p className="text-[10px] text-zinc-300 font-black uppercase tracking-[0.3em] italic">
                     Operational Status: {selectedCamp.status} drive
                   </p>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Unified Detail Item component
const DetailItem = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col">
    <p className="text-[11px] font-bold text-[#A3A6AF] uppercase tracking-widest mb-2 leading-none">{label}</p>
    <p className="text-[15px] font-black tracking-tight text-[#212529] leading-tight break-words">
      {value}
    </p>
  </div>
);

export default SuperAdminCamps;