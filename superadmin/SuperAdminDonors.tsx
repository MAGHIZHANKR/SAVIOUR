
import React, { useState } from 'react';
import { 
  Search, 
  RotateCcw, 
  ChevronDown,
  Eye,
  Edit2,
  Trash2,
  X,
  Download
} from 'lucide-react';

const SuperAdminDonors: React.FC = () => {
  const [donorSearch, setDonorSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState<'All' | 'Male' | 'Female'>('All');
  const [bloodFilter, setBloodFilter] = useState<string>('All');
  const [cityFilter, setCityFilter] = useState('All Cities');

  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState<any>(null);

  const bloodGroups = ['All', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const cities = ['All Cities', 'Chennai', 'Coimbatore', 'Madurai', 'Erode', 'Salem', 'Trichy', 'Tirunelveli'];

  const mockDonors = [
    { name: 'Krishna prakash s', group: 'AB+', mobile: '8838725828', gender: 'Male', residentCity: 'Coimbatore', email: 'krishna.s@gmail.com' },
    { name: 'Kalpana R', group: 'O-', mobile: '7639307312', gender: 'Female', residentCity: 'Chennai', email: 'kalpana.r@outlook.com' },
    { name: 'Ananthan P S', group: 'B+', mobile: '8124882153', gender: 'Male', residentCity: 'Madurai', email: 'ananthan.ps@gmail.com' },
    { name: 'Namashivayam S', group: 'B+', mobile: '9600619980', gender: 'Male', residentCity: 'Coimbatore', email: 'nama.s@gmail.com' },
    { name: 'Vidhya', group: 'AB+', mobile: '9363752907', gender: 'Female', residentCity: 'Salem', email: 'vidhya.v@gmail.com' },
  ];

  const filteredDonors = mockDonors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(donorSearch.toLowerCase()) || donor.mobile.includes(donorSearch);
    const matchesBlood = bloodFilter === 'All' || donor.group === bloodFilter;
    const matchesGender = genderFilter === 'All' || donor.gender === genderFilter;
    const matchesCity = cityFilter === 'All Cities' || donor.residentCity === cityFilter;
    return matchesSearch && matchesBlood && matchesGender && matchesCity;
  });

  const handleExportCSV = () => {
    const headers = ['Name', 'Blood Group', 'Mobile', 'Gender', 'Resident City', 'Email'];
    const csvRows = [headers.join(',')];

    filteredDonors.forEach(donor => {
      const row = [
        `"${donor.name}"`,
        donor.group,
        donor.mobile,
        donor.gender,
        `"${donor.residentCity}"`,
        `"${donor.email}"`
      ];
      csvRows.push(row.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Saviour_Donors_${cityFilter.replace(' ', '_')}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetFilters = () => {
    setDonorSearch('');
    setGenderFilter('All');
    setBloodFilter('All');
    setCityFilter('All Cities');
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <section className="bg-white border border-zinc-200 rounded-[32px] p-10 shadow-sm space-y-10">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-6">
          <div className="flex items-center gap-4">
             <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-800">Global Donor Registry</h3>
             <button 
               onClick={handleExportCSV}
               className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest text-zinc-500 hover:bg-zinc-100"
             >
               <Download size={12} /> Export CSV
             </button>
          </div>
          <button onClick={resetFilters} className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-400 hover:text-red-600 transition-all">
            <RotateCcw size={14} /> Reset
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
              <input 
                type="text" 
                placeholder="Search..." 
                value={donorSearch}
                onChange={(e) => setDonorSearch(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-100 pl-14 pr-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {bloodGroups.map(bg => (
                <button 
                  key={bg}
                  onClick={() => setBloodFilter(bg)}
                  className={`min-w-[48px] h-10 rounded-lg font-black text-[10px] uppercase transition-all border ${
                    bloodFilter === bg ? 'bg-red-800 text-white border-red-800' : 'bg-zinc-50 text-zinc-400 border-zinc-100'
                  }`}
                >
                  {bg}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex gap-2">
              {['All', 'Male', 'Female'].map(g => (
                <button 
                  key={g} 
                  onClick={() => setGenderFilter(g as any)}
                  className={`flex-1 py-4 rounded-lg font-black text-[10px] uppercase transition-all border ${
                    genderFilter === g ? 'bg-red-800 text-white border-red-800' : 'bg-zinc-50 text-zinc-400 border-zinc-100'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            <div className="relative">
              <select 
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 px-6 py-4 rounded-xl font-bold text-sm focus:border-red-600 outline-none appearance-none cursor-pointer"
              >
                {cities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
              <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[32px] border border-zinc-200 shadow-sm overflow-hidden min-h-[400px]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50/50 border-b border-zinc-200">
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Name</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Blood Group</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400">Resident City</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonors.map((donor, idx) => (
              <tr key={idx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                <td className="px-8 py-6 font-bold text-sm text-zinc-700 capitalize">{donor.name}</td>
                <td className="px-8 py-6 font-black text-sm text-red-800">{donor.group}</td>
                <td className="px-8 py-6 text-zinc-500 text-sm font-medium">{donor.residentCity}</td>
                <td className="px-8 py-6">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => { setSelectedDonor(donor); setShowViewModal(true); }} className="bg-blue-600 text-white px-5 py-2 rounded text-[10px] font-black uppercase">View</button>
                    <button className="bg-red-600 text-white px-5 py-2 rounded text-[10px] font-black uppercase">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredDonors.length === 0 && (
          <div className="py-24 text-center opacity-30 italic font-black uppercase tracking-widest text-[10px]">No Matching Donors</div>
        )}
      </section>

      {showViewModal && selectedDonor && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl relative animate-in zoom-in duration-200 p-12">
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-black text-zinc-800 uppercase italic">DONOR PROFILE</h3>
                <button onClick={() => setShowViewModal(false)} className="text-zinc-400 hover:text-black transition-colors"><X size={24} /></button>
             </div>
             <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Name</p>
                  <p className="font-bold">{selectedDonor.name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Blood</p>
                  <p className="font-bold text-red-600">{selectedDonor.group}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Mobile</p>
                  <p className="font-bold">{selectedDonor.mobile}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">City</p>
                  <p className="font-bold">{selectedDonor.residentCity}</p>
                </div>
             </div>
             <button onClick={() => setShowViewModal(false)} className="w-full bg-zinc-900 text-white py-5 rounded-2xl mt-12 font-black text-[10px] uppercase tracking-widest">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminDonors;
